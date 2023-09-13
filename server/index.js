import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import passport from 'passport';
import { Strategy as JwtStrategy } from 'passport-jwt';
import PassportJwtCookieCombo from 'passport-jwt-cookiecombo';
import config from './config.js';
import apiRoutes from './routes/api.js';
import User from './models/user.js';
import { seedPlantGuidesCollection, seedUsersCollection } from './utils/seedDb.js';

dotenv.config();

const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV || 'production';

const app = express();
app.use(cookieParser());
app.use((req, res, next) => {
  next();
});

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
  try {
    const user = async () => {
      const currentUser = await User.findOne({ _id: jwtPayload.sub });
      return currentUser;
    };

    if (user) {
      return done(null, user);
    }

    return done(null, false);
  } catch (error) {
    return console.err(error);
  }
}));

passport.use(new PassportJwtCookieCombo({
  secretOrPublicKey: opts.secretOrKey,
  jwtCookieName: 'jwt',
}, (payload, done) => done(null, payload.user)));

app.use(passport.initialize());
app.use(nodeEnv === 'production' ? cors(config.production.cors) : cors(config.development.cors));
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use('/api', apiRoutes);

// Serve static assets (React frontend)
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

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

// Seed db
await seedUsersCollection(); // To do: eliminate the need for this
await seedPlantGuidesCollection(); // To do: eliminate the need for this

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
