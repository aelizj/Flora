import dotenv from 'dotenv';
import getSecret from './aws/getSecret.js';

dotenv.config();

const port = process.env.PORT || 3000;
const nodeEnv = process.env.NODE_ENV;
const jwtKey = nodeEnv === 'production'
  ? await getSecret(process.env.AWS_JWT_SECRET_NAME)
  : process.env.JWT_DEV_KEY;

const config = {
  production: {
    cors: {
      origin: 'http://flora-app-lb-649416333.us-west-2.elb.amazonaws.com',
      credentials: true,
    },
  },
  development: {
    cors: {
      origin: `http://localhost:${port}`,
      credentials: true,
    },
  },
  jwt: {
    secretOrPublicKey: jwtKey,
    jwtCookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: nodeEnv === 'production',
      maxAge: 3600000,
    },
    isAuthenticatedCookie: {
      httpOnly: false,
      secure: nodeEnv === 'production',
      sameSite: 'lax',
      maxAge: 86400000,
    },
  },
};

export default config;
