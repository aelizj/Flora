import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use('/api', apiRoutes);

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.error('Error connecting to database: ', err));

app.use((err, req, res, next) => {
  console.error(err);
  if (res.headersSent) {
    next(err);
    return;
  }
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
