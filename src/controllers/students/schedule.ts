// File: src/controllers/students/schedule.ts

import { Request, Response } from "express";
import { query } from "../../config/db";

export const viewSchedule = async (req: Request, res: Response) => {
  const studentId = req.session.user!.id;
  const sql = `
    SELECT c.code, c.title, c.schedule 
    FROM enrollments e
    JOIN courses c ON e.course_id=c.id
    WHERE e.student_id=$1
    ORDER BY c.schedule
  `;
  const courses = (await query(sql, [studentId])).rows;
  res.render("student/schedule", { courses });
};