import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';
import PassportJwtCookieCombo from 'passport-jwt-cookiecombo';
import config from '../config.js';
import apiRoutes from './routes/api.js';
import User from './models/user.js';

dotenv.config();

const app = express();
app.use(cookieParser());
app.use((req, res, next) => {
  console.log('Cookies: ', req.cookies);
  next();
});
const port = process.env.PORT || 5001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }

  return token;
};

const opts = {};
opts.jwtFromRequest = cookieExtractor;
opts.secretOrKey = config.jwt.secretOrPublicKey;

passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
  console.log('using jwtStrat');
  console.log('jwtPayload: ', jwtPayload);

  try {
    const user = async () => {
      const u = await User.findOne({ _id: jwtPayload.sub });
      console.log('user: ', user);
      return u;
    };

    if (user) {
      return done(null, user);
    }

    return done(null, false);
    // or you could create a new account
  } catch (error) {
    return console.err(error);
  }
}));

passport.use(new PassportJwtCookieCombo({
  secretOrPublicKey: config.jwt.secretOrPublicKey,
  jwtCookieName: 'jwt',
}, (payload, done) => {
  console.log('payload: ', payload);
  return done(null, payload.user);
}));

app.use(passport.initialize());
app.use(cors(config.cors));
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use('/api', apiRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.error('Error connecting to database: ', err));

app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }
  return res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
