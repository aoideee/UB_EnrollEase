// Filename: src/models/student.ts

import { User } from "./user";

export class Professor extends User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    public facultyID: string
  ) {
    super(id, firstName, lastName, username, email, password);
  }

  getRole(): string {
    return "Professor";
  }
}