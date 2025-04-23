// types/session.d.ts
import 'express-session';

declare module 'express-session' {
  interface SessionData {
    user?: {
      id: string;
      email: string;
      role: string;
      name: string;
      accessLevel?: number; // Admin-specific
    };
  }
}