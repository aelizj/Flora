import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../config.js';
import HttpError from '../utils/httpError.js';
import User from '../models/user.js';
import createTokenAndSetCookie from '../utils/jwtHelper.js';
import { RouteProcessingStart, RouteProcessingSuccess, RouteProcessingFailure } from '../utils/routeProcessing.js';

// Validates user token
const validateToken = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);

  const jwtKey = config.jwt.secretOrPublicKey;
  console.log(jwtKey);
  const token = req.cookies.jwt;
  if (!token) return next(new HttpError('No token provided', 401));
  try {
    let decoded;
    try {
      decoded = jwt.verify(token, jwtKey, {
        ignoreExpiration: true,
      });
    } catch (error) {
      console.error('Token decode error: ', error);
    }

    const user = decoded ? await User.findById(decoded._id) : null;
    if (!user) throw new Error('User not found');
    RouteProcessingSuccess(req.method, req.url, res);
    return res.json(user);
  } catch (error) {
    console.error('Token verification error: ', error);
    RouteProcessingFailure(req.method, req.url, error);
    return next(new HttpError('Invalid token', 401));
  }
};

// Adds new user to database
const registerUser = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);

  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) return next(new HttpError('That email is already in use.', 400)); // Feels like 409 conflict but operation doesn't retry

  const usernameInUse = await User.findOne({ username: req.body.username });
  if (usernameInUse) return next(new HttpError('That username is already in use', 400)); // Feels like 409 conflict but operation doesn't retry

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);

  try {
    await newUser.save();
  } catch (error) {
    RouteProcessingFailure(req.method, req.url, error);
    return next(new HttpError(`Error occurred during registration: ${error}`, 500));
  }

  RouteProcessingSuccess(req.method, req.url, res);
  return createTokenAndSetCookie(newUser, res, next);
};

// Validates entered user credentials
const loginUser = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);

  if (!req.body.email || !req.body.password) {
    return next(new HttpError('All fields are required for submission.', 400));
  }

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return next(new HttpError('No account associated with this email address exists.', 404));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(new HttpError('Incorrect password.', 403));
    RouteProcessingSuccess(req.method, req.url, res);
    return createTokenAndSetCookie(user, res, next);
  } catch (error) {
    RouteProcessingFailure(req.method, req.url, error);
    return next(new HttpError(`Error occured during login: ${error}`, 500));
  }
};

// Logs out user
const logoutUser = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);

  if (!req.cookies.jwt) {
    return next(new HttpError('Bad request', 400));
  }

  try {
    res.clearCookie('jwt');
    res.clearCookie('isAuthenticated');
    RouteProcessingSuccess(req.method, req.url, res);
    return res.send('Successfully logged out!');
  } catch (error) {
    RouteProcessingFailure(req.method, req.url, error);
    return next(new HttpError(`Error occured during logout: ${error}`, 500));
  }
};

export {
  validateToken,
  registerUser,
  loginUser,
  logoutUser,
};
