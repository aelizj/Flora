import HttpError from '../utils/httpError.js';
import User from '../models/user.js';

// Fetches all users from the database
const getUsers = async (req, res, next) => {
  console.log('Inside getUsers function');
  try {
    const users = await User.find({}, '_id firstName lastName username email createdAt updatedAt');
    res.json({ users });
  } catch (err) {
    next(new HttpError('Failed to fetch users', 500));
  }
};

const getUserById = async (req, res, next) => {
  console.log('Inside getUserById function');
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      next(new HttpError('Could not find user with the provided id.', 404));
    }
    res.json({ user });
  } catch (err) {
    next(new HttpError('Something went wrong, please try again', 500));
  }
};

const deleteUserById = async (req, res, next) => {
  console.log('Inside deleteUserById function');
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (!user) {
      next(new HttpError('Could not find user with the provided id.', 404));
    }

    user.deleteOne();
    return ('User successfully deleted.');
  } catch (err) {
    next(new HttpError('Something went wrong, please try again', 500));
  }
};

export { getUsers, getUserById, deleteUserById };
