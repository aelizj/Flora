import jwt from 'jsonwebtoken';
import config from '../../config.js';
import HttpError from './httpError.js';

const createTokenAndSetCookie = async (user, res, next) => {
  console.log('Inside createTokenAndSetCookie function');
  const payload = { _id: user._id };
  jwt.sign(payload, config.jwt.secretOrPublicKey, { expiresIn: '7d' }, (err, token) => {
    if (err) {
      console.error('Error signing JWT:', err);
      return next(new HttpError('Error creating token', 500));
    }

    res.cookie('jwt', token, config.jwt.jwtCookie);
    res.cookie('isAuthenticated', 'true', config.jwt.isAuthedCookie);

    console.log('token successfully generated');
    return res.json({ success: true, user: { _id: user._id }, jwt: token });
  });
};

export default createTokenAndSetCookie;
