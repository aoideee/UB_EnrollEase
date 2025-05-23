// src/routes/professors/index.ts
import { Router } from "express";
import {
  profile,
  dashboard,
  listMyCourses,
} from "../../controllers/professors";
import { ProfessorCoursesController } from "../../controllers/professors/courses";

const router = Router();

// existing routes…
router.get("/profile", profile);
router.get("/dashboard", dashboard);
router.get("/courses", listMyCourses);

// NEW: course‐details & grade‐entry
router.get("/courses/:courseId", ProfessorCoursesController.details);
router.post("/courses/:courseId/grades", ProfessorCoursesController.saveGrades);

export default router;