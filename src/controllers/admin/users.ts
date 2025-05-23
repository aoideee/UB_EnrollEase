import { Request, Response, NextFunction } from "express";
import { query } from "../../config/db";

export class AdminUsersController {
  /** GET /admin/users */
  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const users = (await query(`SELECT * FROM users ORDER BY id`)).rows;
      res.render("admin/users/index", { users });
    } catch (err) {
      next(err);
    }
  }

  /** GET /admin/users/new */
  static renderNew(req: Request, res: Response) {
    res.render("admin/users/new");
  }

  /** POST /admin/users */
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, role, password } = req.body;
      await query(
        `INSERT INTO users (name, email, password_hash, role) VALUES ($1, crypt($2, gen_salt('bf')), $3, $4)`,
        [name, password, password, role]
      );
      res.redirect("/admin/users");
    } catch (err) {
      next(err);
    }
  }

  /** GET /admin/users/:id/edit */
  static async renderEdit(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { rows } = await query(`SELECT * FROM users WHERE id=$1`, [id]);
      if (!rows[0]) return res.redirect("/admin/users");
      res.render("admin/users/edit", { user: rows[0] });
    } catch (err) {
      next(err);
    }
  }

  /** POST /admin/users/:id */
  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { name, email, role } = req.body;
      await query(`UPDATE users SET name=$1, email=$2, role=$3 WHERE id=$4`, [
        name,
        email,
        role,
        id,
      ]);
      res.redirect("/admin/users");
    } catch (err) {
      next(err);
    }
  }

  /** POST /admin/users/:id/delete */
  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await query(`DELETE FROM users WHERE id=$1`, [id]);
      res.redirect("/admin/users");
    } catch (err) {
      next(err);
    }
  }
}