import express from 'express';
import passport from 'passport';
import {
  validateToken,
  registerUser,
  loginUser,
  logoutUser,
} from '../controllers/authController.js';
import { getPlants, createPlant, getPlantById } from '../controllers/plantsController.js';
import { getUsers, getUserById, deleteUserById } from '../controllers/usersController.js';

const router = express.Router();

router.get('/validate-token', validateToken);
router.get('/logout', logoutUser);
router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/plants/:id', passport.authenticate('jwt', { session: false }), getPlantById);
router.post('/plants', passport.authenticate('jwt', { session: false }), createPlant);
router.get('/plants', getPlants);

router.get('/users/:id', getUserById);
router.get('/users', getUsers);
router.delete('users/{id}', deleteUserById);

export default router;
