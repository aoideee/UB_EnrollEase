// src/routes/students/index.ts
import { Router } from "express";
import { renderStudentPage } from "../../controllers/auth";
import ensureAuth from "../../middleware/ensureAuth";
import { CourseController } from "../../controllers/students/courses";
import { viewGrades } from "../../controllers/students/grades";
import { viewSchedule } from "../../controllers/students/schedule";

const router = Router();

// 1 Dashboard route
router.get(
    "/dashboard",
    ensureAuth,
    renderStudentPage
  );
  
  // 2 Course search & enroll/drop
  router.get(   "/courses",           ensureAuth, CourseController.searchForm);
  router.post(  "/courses/search",    ensureAuth, CourseController.searchResults);
  router.post(  "/courses/:id/enroll",ensureAuth, CourseController.enrollCourse);
  router.post(  "/courses/:id/drop",  ensureAuth, CourseController.dropCourse);
  
  // 3 Registrations & grades
  router.get(   "/registrations",     ensureAuth, CourseController.viewRegistrations);
  router.get(   "/grades",            ensureAuth, viewGrades);

  router.get("/schedule", viewSchedule);
  
  export default router;  