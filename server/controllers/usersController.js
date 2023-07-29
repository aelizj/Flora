import HttpError from '../utils/httpError.js';
import User from '../models/user.js';

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, '_id firstName lastName username email createdAt updatedAt');
    res.json({ users });
  } catch (error) {
    next(new HttpError('Failed to fetch users', 500));
  }
};

const getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      next(new HttpError('Could not find user with the provided id.', 404));
    }
    res.json({ user });
  } catch (error) {
    next(new HttpError('Something went wrong, please try again', 500));
  }
};

const deleteUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    res.clearCookie('jwt');
    res.clearCookie('isAuthenticated');
    return res.send('User successfully deleted!');
  } catch (error) {
    return next(new HttpError('Something went wrong, please try again', 500));
  }
};

const patchUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      next(new HttpError('Could not find user with the provided id.', 404));
    }
    return console.log('FOUND USER: ', user._id);
  } catch (error) {
    return next(new HttpError('Something went wrong, please try again', 500));
  }
};

export {
  getUsers,
  getUserById,
  deleteUserById,
  patchUserById,
};
