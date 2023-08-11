const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost/mydatabase';
const secret = process.env.SECRET || 'mysecretkey';

export { databaseUrl, secret };
