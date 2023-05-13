import express from 'express';
import Plant from '../models/plant';

const router = express.Router();

router.get('/api/plants', async (req, res) => {
  try {
    const plants = await Plant.find();
    res.json(plants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
