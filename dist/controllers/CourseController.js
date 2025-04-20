"use strict";
// Filename: controllers/CourseController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
class CourseController {
    constructor() {
        this.courses = [];
    }
    addCourse(course) {
        this.courses.push(course);
        console.log(`[COURSE] Added: ${course.courseCode}`);
    }
    listCourses() {
        return this.courses;
    }
}
exports.CourseController = CourseController;
