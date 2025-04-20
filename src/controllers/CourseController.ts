// Filename: controllers/CourseController.ts

import { Courses } from "../models/courses.js";

export class CourseController {
  private courses: Courses[] = [];

  addCourse(course: Courses) {
    this.courses.push(course);
    console.log(`[COURSE] Added: ${course.courseCode}`);
  }

  listCourses(): Courses[] {
    return this.courses;
  }
}