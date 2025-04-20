export class Courses {
  constructor(
    public courseName: string,
    public courseCode: string,
    public courseDescription: string,
    public courseInstructor: string,
    public courseSchedule: string,
    public startDate: string,
    public endDate: string,
    public time: string,
    public courseLocation: string,
    public courseCredits: number,
    public courseCapacity: number,
    public prerequisites: string[],
    public corequisites: string[]
  ) {}

  getCourseCode(): string {
    return this.courseCode;
  }

  getCourseName(): string {
    return this.courseName;
  }
}