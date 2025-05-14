// src/routes/authRoutes.ts
import express from 'express';
import {
    renderLoginPage,
    renderForgotPasswordPage, 
    renderSignupPage,
    renderStudentPage,
    renderOverviewPage
} from '../controllers/indexController.js';

const router = express.Router();

router.get('/', renderLoginPage);
router.get('/forgot-password', renderForgotPasswordPage);
router.get('/signup', renderSignupPage);
router.get('/student', renderStudentPage);
router.get('/overview', renderOverviewPage);

export default router;