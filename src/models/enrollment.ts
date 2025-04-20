export class Enrollment {
  private grade?: string;

  constructor(
    public studentID: string,
    public courseID: string,
    public enrollmentDate: string
  ) {}

  setGrade(grade: string): void {
    this.grade = grade;
  }

  getStudentID(): string {
    return this.studentID;
  }

  getCourseID(): string {
    return this.courseID;
  }

  getGrade(): string | undefined {
    return this.grade;
  }
}
