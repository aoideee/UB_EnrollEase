// src/services/SessionManager.ts
import { Request } from "express";
import { User } from "../models/user";

export class SessionManager {
  static login(req: Request, user: User): void {
    req.session.user = {
      id: user.id,
      email: user.getEmail(),
      role: user.getRole(),
      name: user.getName(),
    };
  }

  static logout(req: Request): void {
    req.session.destroy(() => {});
  }
}