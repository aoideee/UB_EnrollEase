// src/controllers/AuthController.ts
import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService.js';
import { SessionManager } from '../services/SessionManager.js';

export class AuthController {
  constructor(private authService: AuthService) { }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await this.authService.authenticate(email, password);

      if (!user) {
        return res.status(401).render('auth/login', {
          error: 'Invalid credentials',
          email
        });
      }

      SessionManager.login(req, user);
      switch (user.getRole()) {
        case 'admin':
          return res.redirect('/admin/dashboard');
        case 'professor':
          return res.redirect('/overview');
        case 'student':
          return res.redirect('/home');
        default:
          return res.redirect('/');
      }

    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).render('auth/login', {
        error: 'Login failed. Please try again.',
        email
      });
    }
  }

  logout(req: Request, res: Response) {
    const user = req.session.user; // Assuming the user is stored in the session
    SessionManager.logout(req);
    return res.redirect(user?.role.startsWith('admin') ? '/admin/' : '/');
  }
}