// controller/adminController.ts
import { Request, Response } from 'express';

export const renderAdminLoginPage = (req: Request, res: Response) => {
  res.render('admin');
};

export const renderAdminForgotPasswordPage = (req: Request, res: Response) => {
  res.render('admin/forgot-password');
};

// Add this function to render the admin dashboard
export const renderAdminDashboard = (req: Request, res: Response) => {
  res.render('admin/dashboard', { user: req.session.user });
};
