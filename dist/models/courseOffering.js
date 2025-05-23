"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseOffering = void 0;
class CourseOffering {
    constructor(offeringID, courseID, semesterID, instructor, schedule) {
        this.offeringID = offeringID;
        this.courseID = courseID;
        this.semesterID = semesterID;
        this.instructor = instructor;
        this.schedule = schedule;
    }
    getOfferingID() {
        return this.offeringID;
    }
    getCourseID() {
        return this.courseID;
    }
    getSemesterID() {
        return this.semesterID;
    }
    getInstructor() {
        return this.instructor;
    }
    getSchedule() {
        return this.schedule;
    }
    setInstructor(instructor) {
        this.instructor = instructor;
    }
    setSchedule(schedule) {
        this.schedule = schedule;
    }
}
exports.CourseOffering = CourseOffering;
