export class CourseOffering {
  constructor(
    public offeringID: number,
    public courseID: string,
    public semesterID: number,
    public instructor: string,
    public schedule: string
  ) {}

  getOfferingID(): number {
    return this.offeringID;
  }

  getCourseID(): string {
    return this.courseID;
  }

  getSemesterID(): number {
    return this.semesterID;
  }

  getInstructor(): string {
    return this.instructor;
  }

  getSchedule(): string {
    return this.schedule;
  }

  setInstructor(instructor: string): void {
    this.instructor = instructor;
  }

  setSchedule(schedule: string): void {
    this.schedule = schedule;
  }
}
