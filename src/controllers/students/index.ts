// src/controllers/students/index.ts
import { Request, Response } from "express";
import { query } from "../../config/db";

export class ProfileController {
  /** GET /students/profile */
  static async getProfile(req: Request, res: Response) {
    const user = req.session.user!;
    res.render("student/profile/index", { user });
  }

  /** POST /students/profile */
  static async updateProfile(req: Request, res: Response) {
    const user = req.session.user!;
    const { name, email } = req.body;

    await query(`UPDATE users SET name = $1, email = $2 WHERE id = $3`, [
      name,
      email,
      user.id,
    ]);

    // sync session
    const sessUser = req.session.user;
    if (!sessUser) {
      req.flash("error", "Please log in first.");
      return res.redirect("/auth/login");
    }
    sessUser.name = name;
    sessUser.email = email;
    res.redirect("/students/profile");
  }
}