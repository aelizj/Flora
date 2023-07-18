import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  jwt: {
    secretOrPublicKey: process.env.JWT_SECRET || 'SetSecretInDotEnv',
    options: {

    },
    jwtCookie: {
      httpOnly: true,
      signed: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600000,
    },
    isAuthedCookie: {
      maxAge: 86400000,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    },
  },
}