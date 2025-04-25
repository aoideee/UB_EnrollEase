// src/models/professor.ts
import { User } from './user.js';

export class Professor extends User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string, // Changed from password to passwordHash
    public readonly facultyID: string, // Marked as readonly
    public department: string,
    public officeLocation?: string // Made optional as not all professors may have an office
  ) {
    super(id, firstName, lastName, email, password, 'professor'); // Explicit role
  }

  // Optional: Add method to get full title
  public override getName(): string {
    return `Prof. ${this.lastName}`;
  }

  public override getRole(): string {
    return "professor"; // Consistent lowercase
  }
}