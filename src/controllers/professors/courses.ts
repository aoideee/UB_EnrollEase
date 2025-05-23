// src/controllers/professors/courses.ts
import { Request, Response, NextFunction } from "express";
import { query } from "../../config/db";

export class ProfessorCoursesController {
  /** GET /professors/courses/:courseId */
  static async details(req: Request, res: Response, next: NextFunction) {
    try {
      const courseId = req.params.courseId;
      // fetch course info
      const {
        rows: [course],
      } = await query(`SELECT * FROM courses WHERE id = $1`, [courseId]);
      // fetch enrolled students + grades
      const { rows: students } = await query(
        `SELECT u.id, u.name, u.email, e.grade
         FROM enrollments e
         JOIN users u ON e.student_id = u.id
         WHERE e.course_id = $1
         ORDER BY u.name`,
        [courseId]
      );
      res.render("professor/courses/details", { course, students });
    } catch (err) {
      next(err);
    }
  }

  /** POST /professors/courses/:courseId/grades */
  static async saveGrades(req: Request, res: Response, next: NextFunction) {
    try {
      const { courseId } = req.params;
      const { studentId, grade } = req.body;
      await query(
        `UPDATE enrollments
           SET grade = $1
         WHERE course_id = $2 AND student_id = $3`,
        [grade, courseId, studentId]
      );
      res.redirect(`/professors/courses/${courseId}`);
    } catch (err) {
      next(err);
    }
  }
}