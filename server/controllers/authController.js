import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../../config.js';
import HttpError from '../utils/httpError.js';
import User from '../models/user.js';
import createTokenAndSetCookie from '../utils/jwtHelper.js';

// Validates user token
const validateToken = async (req, res, next) => {
  console.log('Inside validateToken function');

  const token = req.cookies.jwt;
  if (!token) {
    return next(new HttpError('No token provided', 401));
  }
  try {
    let decoded;
    try {
      decoded = jwt.verify(token, config.jwt.secretOrPublicKey, {
        ignoreExpiration: true,
      });
    } catch (error) {
      console.error('Token decode error: ', error);
    }

    const user = decoded ? await User.findById(decoded._id) : null;
    if (!user) {
      throw new Error('User not found');
    }

    console.log(user);
    return res.json(user);
  } catch (error) {
    console.error('Token verification error: ', error);
    return next(new HttpError('Invalid token', 401));
  }
};

// Adds new user to database
const registerUser = async (req, res, next) => {
  console.log('Inside registerUser function');

  const existingUser = await User.findOne({ email: req.body.email });
  if (existingUser) return next(new HttpError('That email is already in use.', 409));

  const usernameInUse = await User.findOne({ username: req.body.username });
  if (usernameInUse) return next(new HttpError('That username is already in use', 409));

  const newUser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);

  const user = await newUser.save();

  return createTokenAndSetCookie(user, res, next);
};

// Validates entered user credentials
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return next(new HttpError('No account associated with this email address exists.', 404));

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(new HttpError('Incorrect password.', 400));

    return createTokenAndSetCookie(user, res, next);
  } catch (err) {
    return next(new HttpError('Error occured during login', 500));
  }
};

export { validateToken, registerUser, loginUser };
