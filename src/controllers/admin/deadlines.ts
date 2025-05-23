// File: src/controllers/admin/deadlines.ts

import { Request, Response, NextFunction } from "express";
import { query } from "../../config/db";

export class AdminDeadlinesController {
  /** GET /admin/deadlines */
  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const deadlines = (await query(`SELECT * FROM deadlines ORDER BY type`))
        .rows;
      res.render("admin/deadlines/index", { deadlines });
    } catch (err) {
      next(err);
    }
  }

  /** GET /admin/deadlines/:type/edit */
  static async renderEdit(req: Request, res: Response, next: NextFunction) {
    try {
      const { type } = req.params;
      const { rows } = await query(`SELECT * FROM deadlines WHERE type=$1`, [
        type,
      ]);
      if (!rows[0]) return res.redirect("/admin/deadlines");
      res.render("admin/deadlines/edit", { deadline: rows[0] });
    } catch (err) {
      next(err);
    }
  }

  /** POST /admin/deadlines/:type */
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { type } = req.params;
      const { date } = req.body;
      await query(`UPDATE deadlines SET date=$1 WHERE type=$2`, [date, type]);
      res.redirect("/admin/deadlines");
    } catch (err) {
      next(err);
    }
  }
}