// routes/adminRoutes.ts
import express from 'express';
import {
    renderAdminLoginPage,
    renderAdminForgotPasswordPage,
    renderAdminDashboard,
} from '../controllers/adminController.js';

const router = express.Router();

// Admin login page
router.get('/', renderAdminLoginPage);

// Admin forgot password page
router.get('/forgot-password', renderAdminForgotPasswordPage);

// Admin dashboard page
router.get('/dashboard', renderAdminDashboard);

export default router;