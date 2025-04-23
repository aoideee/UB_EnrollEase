// src/models/student.ts
import { User } from './user.js';

export class Student extends User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    public studentID: string,
    public major: string,
    public enrollmentDate: Date,
    public gpa?: number
  ) {
    super(id, firstName, lastName, email, password);
  }

  override getRole(): string {
    return "Student";
  }
}