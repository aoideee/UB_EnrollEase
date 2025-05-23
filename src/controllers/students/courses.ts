// src/controllers/students/courses.ts
import { Request, Response } from "express";
import { query } from "../../config/db";

export class CourseController {
  /** GET /students/courses */
  static async searchForm(req: Request, res: Response) {
    try {
      // load filters
      const programsRes = await query(
        `SELECT DISTINCT program FROM courses ORDER BY program`
      );
      const programs = programsRes.rows.map((r) => r.program);

      const errorMsg = req.flash("error");
      const successMsg = req.flash("success");

      res.render("student/courses/search", {
        programs,
        keyword: "",
        selectedProgram: "",
        errorMsg,
        successMsg,
      });
    } catch (err) {
      console.error("Error loading course search form:", err);
      res.status(500).send("Server Error");
    }
  }

  /** POST /students/courses/search */
  static async searchResults(req: Request, res: Response) {
    try {
      const { keyword, program } = req.body;
      let sql =
        "SELECT c.*, (SELECT COUNT(*) FROM enrollments e WHERE e.course_id=c.id) AS enrolled_count " +
        "FROM courses c WHERE 1=1";
      const params: any[] = [];

      if (keyword) {
        params.push(`%${keyword}%`);
        sql += ` AND (c.code ILIKE $${params.length} OR c.title ILIKE $${params.length})`;
      }
      if (program) {
        params.push(program);
        sql += ` AND c.program = $${params.length}`;
      }
      sql += " ORDER BY c.code";

      const courses = (await query(sql, params)).rows;

      // reload sidebar
      const programs = (
        await query(`SELECT DISTINCT program FROM courses ORDER BY program`)
      ).rows.map((r) => r.program);

      const errorMsg = req.flash("error");
      const successMsg = req.flash("success");

      res.render("student/courses/results", {
        courses,
        programs,
        keyword,
        selectedProgram: program,
        errorMsg,
        successMsg,
      });
    } catch (err) {
      console.error("Error running course search:", err);
      res.status(500).send("Server Error");
    }
  }

  /** POST /students/courses/:id/enroll */
  static async enrollCourse(req: Request, res: Response) {
    try {
      const studentId = req.session.user!.id;
      const courseId = parseInt(req.params.id, 10);

      // fetch deadlines and capacity in one go
      const courseRes = await query(
        `SELECT enroll_deadline, capacity FROM courses WHERE id = $1`,
        [courseId]
      );
      if (!courseRes.rows[0]) {
        req.flash("error", "Course not found.");
        return res.redirect("/students/courses");
      }
      const { enroll_deadline, capacity } = courseRes.rows[0];

      // deadline check
      if (enroll_deadline && new Date() > new Date(enroll_deadline)) {
        req.flash("error", "Enrollment period has ended.");
        return res.redirect("/students/courses");
      }

      // capacity check
      const enrolledCount = parseInt(
        (
          await query(`SELECT COUNT(*) FROM enrollments WHERE course_id = $1`, [
            courseId,
          ])
        ).rows[0].count,
        10
      );
      if (enrolledCount >= capacity) {
        req.flash("error", "This course is full.");
        return res.redirect("/students/courses");
      }

      // duplicate check
      const exists = (
        await query(
          `SELECT 1 FROM enrollments WHERE student_id = $1 AND course_id = $2`,
          [studentId, courseId]
        )
      ).rows.length;
      if (exists) {
        req.flash("error", "You are already enrolled.");
        return res.redirect("/students/courses");
      }

      // enroll
      await query(
        `INSERT INTO enrollments (student_id, course_id) VALUES ($1, $2)`,
        [studentId, courseId]
      );
      req.flash("success", "🎉 You’ve been enrolled!");
      res.redirect("/students/registrations");
    } catch (err) {
      console.error("Error during enrollment:", err);
      req.flash("error", "An unexpected error occurred.");
      res.redirect("/students/courses");
    }
  }

  /** POST /students/courses/:id/drop */
  static async dropCourse(req: Request, res: Response) {
    try {
      const studentId = req.session.user!.id;
      const courseId = parseInt(req.params.id, 10);

      // fetch drop deadline
      const courseRes = await query(
        `SELECT drop_deadline FROM courses WHERE id = $1`,
        [courseId]
      );
      const { drop_deadline } = courseRes.rows[0] || {};
      if (drop_deadline && new Date() > new Date(drop_deadline)) {
        req.flash("error", "Drop period has ended.");
        return res.redirect("/students/registrations");
      }

      // delete
      const del = await query(
        `DELETE FROM enrollments WHERE student_id = $1 AND course_id = $2`,
        [studentId, courseId]
      );
      if ((del.rowCount ?? 0) > 0) {
        req.flash("success", "You have successfully dropped the course.");
      } else {
        req.flash("error", "You were not enrolled in that course.");
      }
      res.redirect("/students/registrations");
    } catch (err) {
      console.error("Error dropping course:", err);
      req.flash("error", "An unexpected error occurred.");
      res.redirect("/students/registrations");
    }
  }

  /** GET /students/registrations */
  static async viewRegistrations(req: Request, res: Response) {
    try {
      const studentId = req.session.user!.id;
      const sql = `
        SELECT c.*, e.id AS enrollment_id
        FROM enrollments e
        JOIN courses c ON e.course_id = c.id
        WHERE e.student_id = $1
        ORDER BY c.code
      `;
      const registrations = (await query(sql, [studentId])).rows;

      const successMsg = req.flash("success");
      const errorMsg = req.flash("error");

      res.render("student/courses/registration", {
        registrations,
        successMsg,
        errorMsg,
      });
    } catch (err) {
      console.error("Error loading registrations:", err);
      res.status(500).send("Server Error");
    }
  }
}