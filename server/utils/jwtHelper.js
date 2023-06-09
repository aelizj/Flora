import jwt from 'jsonwebtoken';
import HttpError from './httpError.js';

const createTokenAndSetCookie = async (user, res, next) => {
  try {
    const payload = { id: user.id, name: user.name };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000,
    });

    return res.json({ success: true });
  } catch (err) {
    return next(new HttpError('Error occurred during token creation.', 500));
  }
};

export default createTokenAndSetCookie;
