// src/models/student.ts
import { User } from './user.js';
import { DegreeType } from './degreeType.js';

export class Student extends User {
  constructor(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string, // Changed from password to passwordHash for clarity
    public readonly studentID: string, // Marked as readonly as it shouldn't change
    public degree: DegreeType,
    public enrollmentDate: Date,
    public expectedGraduation?: Date, // Optional graduation date
    public gpa?: number // GPA remains optional
  ) {
    super(id, firstName, lastName, email, password, 'student'); // Explicit role
  }

  public override getRole(): string {
    return "student"; // Consistent lowercase to match database enum
  }

  // Student-specific methods
  get academicStatus(): string {
    let status = `${this.degree.level} student in ${this.degree.name}`;
    if (this.gpa) status += ` | GPA: ${this.gpa.toFixed(2)}`;
    if (this.expectedGraduation) {
      status += ` | Expected ${this.expectedGraduation.getFullYear()}`;
    }
    return status;
  }

  public getDegreeCode(): string {
    return this.degree.code;
  }
}