// routes/authRoutes.ts
import express from 'express';
import pool from '../config/db.js';
import { AuthService } from '../services/AuthService.js';
import { AuthController } from "../controllers/authController.js";

const router = express.Router();
const authService = new AuthService(pool);
const authController = new AuthController(authService);

router.get('/login', (req, res) => {
  res.render('login', { error: null, email: '' });
});

router.post('/login', (req, res) => authController.login(req, res));
router.get('/logout', (req, res) => authController.logout(req, res));

export default router;