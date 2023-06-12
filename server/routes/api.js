import express from 'express';
import { getPlants, createPlant, getPlantById } from '../controllers/plantsController.js';

const router = express.Router();

router.get('/plants', getPlants);
router.post('/plants', createPlant);
router.get('/plants/:id', getPlantById);

export default router;
