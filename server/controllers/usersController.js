import HttpError from '../utils/httpError.js';
import User from '../models/user.js';
import { RouteProcessingStart, RouteProcessingSuccess, RouteProcessingFailure } from '../utils/routeProcessing.js';

const getUsers = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);

  try {
    const users = await User.find({}, '_id firstName lastName username email createdAt updatedAt');
    RouteProcessingSuccess(req.method, req.url, res);
    res.json({ users });
  } catch (error) {
    RouteProcessingFailure(req.method, req.url, error);
    next(new HttpError('Failed to fetch users', 500));
  }
};

const getUserById = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);

  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      next(new HttpError('Could not find user with the provided id.', 404));
    }
    RouteProcessingSuccess(req.method, req.url, res);
    res.json({ user });
  } catch (error) {
    RouteProcessingFailure(req.method, req.url, error);
    next(new HttpError('Something went wrong, please try again', 500));
  }
};

const deleteUserById = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);

  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.clearCookie('jwt');
    res.clearCookie('isAuthenticated');
    RouteProcessingSuccess(req.method, req.url, res);
    return res.send('User successfully deleted!');
  } catch (error) {
    RouteProcessingFailure(req.method, req.url, error);
    return next(new HttpError('Something went wrong, please try again', 500));
  }
};

const patchUserById = async (req, res, next) => {
  RouteProcessingStart(req.method, req.url);

  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      next(new HttpError('Could not find user with the provided id.', 404));
    }
    RouteProcessingSuccess(req.method, req.url, res);
    return res.json({ user });
  } catch (error) {
    RouteProcessingFailure(req.method, req.url, error);
    return next(new HttpError('Something went wrong, please try again', 500));
  }
};

export {
  getUsers,
  getUserById,
  deleteUserById,
  patchUserById,
};
