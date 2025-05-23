// File: src/routes/admin/index.ts

import { Router } from "express";
import {
  renderAdminLoginPage,
  renderAdminForgotPasswordPage,
  renderAdminDashboard,
} from "../../controllers/admin";

// Management sub-routers
import usersRouter from "./users";
import coursesRouter from "./courses";
import deadlinesRouter from "./deadlines";

const router = Router();

// Admin authentication & dashboard
router.get("/", renderAdminLoginPage);
router.get("/forgot-password", renderAdminForgotPasswordPage);
router.get("/dashboard", renderAdminDashboard);

// Admin CRUD sections
router.use("/users", usersRouter);
router.use("/courses", coursesRouter);
router.use("/deadlines", deadlinesRouter);

export default router;