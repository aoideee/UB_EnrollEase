// src/models/Admin.ts
import { User } from './user.js';

export class Admin extends User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    public readonly adminID: string, // Marked as readonly as it shouldn't change
    public accessLevel: number
  ) {
    super(id, firstName, lastName, email, password, 'admin'); // Explicit role
  }

  override getRole(): string {
    return "Admin";
  }
}