"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Courses = void 0;
class Courses {
    constructor(courseName, courseCode, courseDescription, courseInstructor, courseSchedule, startDate, endDate, time, courseLocation, courseCredits, courseCapacity, prerequisites, corequisites) {
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.courseDescription = courseDescription;
        this.courseInstructor = courseInstructor;
        this.courseSchedule = courseSchedule;
        this.startDate = startDate;
        this.endDate = endDate;
        this.time = time;
        this.courseLocation = courseLocation;
        this.courseCredits = courseCredits;
        this.courseCapacity = courseCapacity;
        this.prerequisites = prerequisites;
        this.corequisites = corequisites;
    }
    getCourseCode() {
        return this.courseCode;
    }
    getCourseName() {
        return this.courseName;
    }
}
exports.Courses = Courses;
