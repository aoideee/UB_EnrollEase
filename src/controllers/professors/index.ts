// src/controllers/professors/index.ts
import { Request, Response, NextFunction } from "express";
import { query } from "../../config/db";

/** Show the professor’s profile page. */
export function profile(req: Request, res: Response) {
  const user = req.session.user!;
  res.render("professor/profile/index", {
    user,
    error: null,
  });
}

/** Professor dashboard – shows all courses taught by this professor. */
export async function dashboard(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = req.session.user!;
    const sql = `
      SELECT *
      FROM courses
      WHERE professor_id = $1
      ORDER BY code
    `;
    const result = await query(sql, [user.id]);
    res.render("professor/dashboard", { user, courses: result.rows });
  } catch (err: any) {
    console.error("ProfessorController.dashboard error:", err);
    next(err);
  }
}

/** List of courses – same as dashboard but renders a different view. */
export async function listMyCourses(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = req.session.user!;
    const sql = `
      SELECT *
      FROM courses
      WHERE professor_id = $1
      ORDER BY code
    `;
    const result = await query(sql, [user.id]);
    res.render("professor/courses", { courses: result.rows });
  } catch (err: any) {
    console.error("ProfessorController.listMyCourses error:", err);
    next(err);
  }
}