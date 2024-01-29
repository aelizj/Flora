import express from 'express';
import passport from 'passport';
import {
  validateToken,
  registerUser,
  loginUser,
  logoutUser,
} from '../controllers/authController.js';
import {
  getPlantGuides,
  createPlantGuide,
  getPlantGuideById,
  patchPlantGuideById,
  deletePlantGuideById,
} from '../controllers/plantGuidesController.js';
import {
  getUsers,
  getUserById,
  deleteUserById,
  patchUserById,
} from '../controllers/usersController.js';

const router = express.Router();

router.get('/validate-token', validateToken);
router.get('/logout', logoutUser);
router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/users/:id', getUserById);
router.patch('/users/:id', patchUserById);
router.delete('/users/:id', deleteUserById);
router.get('/users', getUsers);

router.get('/plant-guides/:id', passport.authenticate('jwt', { session: false }), getPlantGuideById);
router.patch('/plant-guides/:id', passport.authenticate('jwt', { session: false }), patchPlantGuideById);
router.delete('/plant-guides/:id', passport.authenticate('jwt', { session: false }), deletePlantGuideById);
router.post('/plant-guides', passport.authenticate('jwt', { session: false }), createPlantGuide);
router.get('/plant-guides', getPlantGuides);

export default router;
