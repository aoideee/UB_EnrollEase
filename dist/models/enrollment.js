"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enrollment = void 0;
class Enrollment {
    constructor(studentID, courseID, enrollmentDate) {
        this.studentID = studentID;
        this.courseID = courseID;
        this.enrollmentDate = enrollmentDate;
    }
    setGrade(grade) {
        this.grade = grade;
    }
    getStudentID() {
        return this.studentID;
    }
    getCourseID() {
        return this.courseID;
    }
    getGrade() {
        return this.grade;
    }
}
exports.Enrollment = Enrollment;
