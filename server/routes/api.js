import express from 'express';
import { getPlants, createPlant } from '../controllers/plantsController.js';

const router = express.Router();

router.get('/plants', getPlants);
router.post('/plants', createPlant);

export default router;
