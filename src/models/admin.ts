// src/models/Admin.ts
import { User } from './user.js';

export class Admin extends User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    public accessLevel: number
  ) {
    super(id, firstName, lastName, email, password);
  }

  override getRole(): string {
    return "Admin";
  }
}