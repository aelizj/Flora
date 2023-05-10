import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import apiRoutes from './routes/api';
import uiRoutes from './routes/ui';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.error(err));

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
