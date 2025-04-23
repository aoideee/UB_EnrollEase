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
        case 'Admin':
          return res.redirect('/admin/dashboard');
        case 'Professor':
          return res.redirect('/overview');
        default:
          return res.redirect('/home');
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
    return res.redirect(user?.role.startsWith('Admin') ? '/admin/' : '/');
  }
}