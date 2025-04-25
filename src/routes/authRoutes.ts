// src/routes/authRoutes.ts
import express from 'express';
import { Pool } from 'pg';
import { getPool } from '../config/db.js';
import { AuthService } from '../services/AuthService.js';
import { AuthController } from "../controllers/authController.js";

const router = express.Router();

// Initialize services with proper typing
const pool: Pool = getPool();
const authService = new AuthService();
const authController = new AuthController(authService);

// Health check endpoint
router.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1');
    res.status(200).json({ 
      status: 'healthy',
      database: 'connected'
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown database error';
    res.status(503).json({ 
      status: 'unhealthy',
      database: 'disconnected',
      error: errorMessage
    });
  }
});

// Login route
router.get('/login', (req, res) => {
  res.render('auth/login', { 
    error: null, 
    email: ''
  });
});

// Login submission with error handling
router.post('/login', async (req, res) => {
  try {
    // Test connection first
    await pool.query('SELECT 1');
    return authController.login(req, res);
  } catch (err: unknown) {
    console.error('Database connection error:', err);
    const email = typeof req.body.email === 'string' ? req.body.email : '';
    return res.status(503).render('auth/login', {
      error: 'Database connection issue. Please try again later.',
      email
    });
  }
});

// Logout route
router.get('/logout', (req, res) => authController.logout(req, res));

export default router;