// src/controllers/students/grades.ts

import { Request, Response } from "express";
import { query } from "../../config/db";

export const viewGrades = async (req: Request, res: Response) => {
  try {
    const studentId = req.session.user?.id;
    if (!studentId) {
      req.flash("error", "Please log in to view your grades.");
      return res.redirect("/auth/login");
    }

    const sql = `
      SELECT 
        c.id          AS course_id,
        c.code        AS course_code,
        c.title       AS course_title,
        e.grade       AS grade
      FROM enrollments e
      JOIN courses     c ON e.course_id = c.id
      WHERE e.student_id = $1
      ORDER BY c.code
    `;
    const { rows: enrollments } = await query(sql, [studentId]);

    // pull flash messages
    const successMsg = req.flash("success")[0];
    const errorMsg = req.flash("error")[0];

    // **IMPORTANT**: use **student/grades**, not students/grades
    res.render("student/grades", {
      enrollments,
      successMsg,
      errorMsg,
    });
  } catch (err) {
    console.error("Error loading grades:", err);
    res.status(500).send("Server Error");
  }
};