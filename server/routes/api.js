import express from 'express';
import Plant from '../models/plant';

const router = express.Router();

router.get('/api/plants', async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
