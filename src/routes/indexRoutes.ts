// src/routes/authRoutes.ts
import express from 'express';
import {
    renderLoginPage,
    renderForgotPasswordPage, 
    renderSignupPage,
    renderHomePage,
    renderOverviewPage
} from '../controllers/indexController.js';

const router = express.Router();

router.get('/', renderLoginPage);
router.get('/forgot-password', renderForgotPasswordPage);
router.get('/signup', renderSignupPage);
router.get('/home', renderHomePage);
router.get('/overview', renderOverviewPage);

export default router;