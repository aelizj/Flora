import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/api';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully.');
  } catch (err) {
    console.error('Error connecting to database: ', err);
  }
};

connectToDb();

app.use(cors());
app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use('/api', apiRoutes);
app.use((err, req, res) => {
  console.error(err);
  res.status(err.status || 500).json({ message: err.message });
});

connectToDb();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
