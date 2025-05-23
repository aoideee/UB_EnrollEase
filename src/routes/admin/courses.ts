// File: src/routes/admin/courses.ts

import { Router } from "express";
import { AdminCoursesController } from "../../controllers/admin/courses";

const router = Router();
router.get("/courses", AdminCoursesController.list);
router.get("/courses/new", AdminCoursesController.renderNew);
router.post("/courses", AdminCoursesController.create);
router.get("/courses/:id/edit", AdminCoursesController.renderEdit);
router.post("/courses/:id", AdminCoursesController.update);
router.post("/courses/:id/delete", AdminCoursesController.delete);

export default router;