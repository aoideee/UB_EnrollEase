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

  // Utility method to check if the student is on track to graduate
  isOnTrackToGraduate(currentDate: Date = new Date()): boolean {
    return this.expectedGraduation ? currentDate <= this.expectedGraduation : false;
  }
}