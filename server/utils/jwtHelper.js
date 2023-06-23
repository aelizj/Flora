import jwt from 'jsonwebtoken';
import HttpError from './httpError.js';

const createTokenAndSetCookie = async (user, res, next) => {
  const payload = { id: user._id };
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
    if (err) {
      return next(new HttpError('Error creating token', 500));
    }

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000,
    });

    return res.json({ success: true, user: { id: user._id, username: user.username } });
  });
};

export default createTokenAndSetCookie;
