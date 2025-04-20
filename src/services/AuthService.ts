// Filename: services/AuthService.ts

import { User } from "../models/user.js";

export class AuthService {
  private users: User[] = [];

  register(user: User) {
    this.users.push(user);
    console.log(`[AUTH] Registered user: ${user.getName()}`);
  }

  login(username: string, password: string): User | null {
    const user = this.users.find((u) => u.username === username);
    return user ?? null;
  }
}