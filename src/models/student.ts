// src/models/student.ts

import { User } from "./user";

export class Student extends User {
  constructor(
    id: string,
    name: string,
    email: string,
    role: string = "student"
  ) {
    super(id, name, email, role);
  }

  public override getRole(): string {
    return "student";
  }
}