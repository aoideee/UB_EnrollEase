// src/models/professor.ts
import { User } from './user.js';

export class Professor extends User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    public facultyID: string,
    public department: string,
    public officeLocation: string
  ) {
    super(id, firstName, lastName, email, password);
  }

  override getRole(): string {
    return "Professor";
  }
}