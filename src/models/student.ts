// src/models/student.ts
import { User } from './user.js';

export class Student extends User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string, // Changed from password to passwordHash for clarity
    public readonly studentID: string, // Marked as readonly as it shouldn't change
    public major: string,
    public enrollmentDate: Date,
    public gpa?: number // GPA remains optional
  ) {
    super(id, firstName, lastName, email, password, 'student'); // Explicit role
  }

  public override getRole(): string {
    return "student"; // Consistent lowercase to match database enum
  }

  // Student-specific methods
  public getAcademicStatus(): string {
    return this.gpa ? `GPA: ${this.gpa.toFixed(2)}` : 'No GPA recorded';
  }
}