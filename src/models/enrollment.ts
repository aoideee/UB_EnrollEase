export class Enrollment {
  private grade?: string;

  constructor(
    public studentID: string,
    public offeringID: number,
    public enrollmentDate: string
  ) {}

  setGrade(grade: string): void {
    this.grade = grade;
  }

  getStudentID(): string {
    return this.studentID;
  }

  getOfferingID(): number {
    return this.offeringID;
  }

  getEnrollmentDate(): string {
    return this.enrollmentDate;
  }

  getGrade(): string | undefined {
    return this.grade;
  }
}