import jwt from 'jsonwebtoken';
import HttpError from './httpError.js';

const createTokenAndSetCookie = async (user, res, next) => {
  console.log('Inside createTokenAndSetCookie function');
  const payload = { id: user._id };
  jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
    console.log(token);
    if (err) {
      return next(new HttpError('Error creating token', 500));
    }

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000,
    });

    res.cookie('isAuthenticated', 'true', {
      maxAge: 86400000,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return res.json({ success: true, user: { id: user._id }, token });
  });
};

export default createTokenAndSetCookie;
