import dotenv from 'dotenv';
dotenv.config();

const config = {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true
  },
  jwt: {
    secretOrPublicKey: process.env.JWT_SECRET || 'SetSecretInDotEnv',
    options: {

    },
    jwtCookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000,
    },
    isAuthedCookie: {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400000,
    },
  },
};

export default config;