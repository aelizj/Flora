import express from 'express';
import passport from 'passport';
import { registerUser, loginUser } from '../controllers/authController.js';
import { getPlants, createPlant, getPlantById } from '../controllers/plantsController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/plants', getPlants);
router.post('/plants', passport.authenticate('jwt', { session: false }), createPlant);
router.get('/plants/:id', passport.authenticate('jwt', { session: false }), getPlantById);

export default router;
