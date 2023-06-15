import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';
import { getPlants, createPlant, getPlantById } from '../controllers/plantsController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/plants', getPlants);
router.post('/plants', createPlant);
router.get('/plants/:id', getPlantById);

export default router;
