// src/services/SessionManager.ts
import { Request } from 'express';
import { User } from '../models/user.js';
import { Admin } from '../models/admin.js';
import { Student } from '../models/student.js';
import { Professor } from '../models/professor.js';

export class SessionManager {
  static login(req: Request, user: User): void {
    req.session.user = {
      id: user.id,
      email: user.getEmail(),
      role: user.getRole(),
      name: user.getName(),
      ...(user instanceof Admin && { accessLevel: (user as Admin).accessLevel }),
      ...(user instanceof Professor && { department: (user as Professor).department }),
      ...(user instanceof Student && { major: (user as Student).major })
    };
  }

  static logout(req: Request): void {
    req.session.destroy(() => {});
  }
}