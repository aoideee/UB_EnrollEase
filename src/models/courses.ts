export class Courses {
    constructor(
        public readonly courseId: string,
        public courseName: string,
        public courseDescription: string,
        public department: string,        // department_name from departments table
        public courseInstructor: string,  // faculty_id from professors table
        public courseSchedule: string,
        public startDate: Date,           // Changed to Date type
        public endDate: Date,             // Changed to Date type
        public meetingTime: string,       // More descriptive than just 'time'
        public courseLocation: string,
        public courseCredits: number,
        public courseCapacity: number,
        public readonly semesterId: string,
        public prerequisites: string[],    // array of courseIds
        public corequisites: string[],     // array of courseIds
        public degreeCode: string // New field to associate courses with degrees
    ) { }

    // Getter methods
    getCourseCode(): string {
        return this.courseId;
    }

    getCourseName(): string {
        return this.courseName;
    }

    getSemester(): string {
        return this.semesterId;
    }

    // Utility methods
    isCourseActive(currentDate: Date = new Date()): boolean {
        return currentDate >= this.startDate && currentDate <= this.endDate;
    }

    hasSeatAvailable(currentEnrollment: number): boolean {
        return currentEnrollment < this.courseCapacity;
    }
}