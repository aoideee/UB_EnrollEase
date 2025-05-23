// File: src/controllers/admin/courses.ts

import { Request, Response, NextFunction } from "express";
import { query } from "../../config/db";

export class AdminCoursesController {
  /** GET /admin/courses */
  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const courses = (await query(`SELECT * FROM courses ORDER BY code`)).rows;
      res.render("admin/courses/index", { courses });
    } catch (err) {
      next(err);
    }
  }

  /** GET /admin/courses/new */
  static renderNew(req: Request, res: Response) {
    res.render("admin/courses/new");
  }

  /** POST /admin/courses */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        code,
        title,
        description,
        program,
        credits,
        capacity,
        schedule,
        professor_id,
        enroll_deadline,
        drop_deadline,
      } = req.body;
      await query(
        `INSERT INTO courses
          (code,title,description,program,credits,capacity,schedule,professor_id,enroll_deadline,drop_deadline)
         VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
        [
          code,
          title,
          description,
          program,
          credits,
          capacity,
          schedule,
          professor_id || null,
          enroll_deadline || null,
          drop_deadline || null,
        ]
      );
      res.redirect("/admin/courses");
    } catch (err) {
      next(err);
    }
  }

  /** GET /admin/courses/:id/edit */
  static async renderEdit(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { rows } = await query(`SELECT * FROM courses WHERE id=$1`, [id]);
      if (!rows[0]) return res.redirect("/admin/courses");
      res.render("admin/courses/edit", { course: rows[0] });
    } catch (err) {
      next(err);
    }
  }

  /** POST /admin/courses/:id */
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const {
        code,
        title,
        description,
        program,
        credits,
        capacity,
        schedule,
        professor_id,
        enroll_deadline,
        drop_deadline,
      } = req.body;
      await query(
        `UPDATE courses SET
           code=$1,title=$2,description=$3,program=$4,credits=$5,capacity=$6,
           schedule=$7,professor_id=$8,enroll_deadline=$9,drop_deadline=$10
         WHERE id=$11`,
        [
          code,
          title,
          description,
          program,
          credits,
          capacity,
          schedule,
          professor_id || null,
          enroll_deadline || null,
          drop_deadline || null,
          id,
        ]
      );
      res.redirect("/admin/courses");
    } catch (err) {
      next(err);
    }
  }

  /** POST /admin/courses/:id/delete */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await query(`DELETE FROM courses WHERE id=$1`, [id]);
      res.redirect("/admin/courses");
    } catch (err) {
      next(err);
    }
  }
}