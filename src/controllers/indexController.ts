// src/controllers/indexController.ts
import { Request, Response } from 'express';

export const renderLoginPage = (req: Request, res: Response) => {
    res.render('index');
};

export const renderForgotPasswordPage = (req: Request, res: Response) => {
    res.render('forgot-password');
};

export const renderSignupPage = (req: Request, res: Response) => {
    res.render('signup');
};

export const renderHomePage = (req: Request, res: Response) => {
    res.render('home', { user: req.session.user });
};

export const renderOverviewPage = (req: Request, res: Response) => {
    res.render('overview', { user: req.session.user });
};