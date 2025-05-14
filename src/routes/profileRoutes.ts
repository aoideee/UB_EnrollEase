import express from 'express';
import { ProfileController } from '../controllers/profileController.js';

const router = express.Router();

// GET: Render the profile page
router.get('/profile', ProfileController.getProfile);

// POST: Update username and password
router.post('/profile', ProfileController.updateProfile);

export default router;