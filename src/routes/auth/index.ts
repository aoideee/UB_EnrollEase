// src/routes/auth/index.ts
import { Router } from "express";
import {
  health,
  renderLoginPage,
  login,
  logout,
  renderForgotPasswordPage,
  renderSignupPage,
  register,
  renderStudentPage,
  renderOverviewPage,
} from "../../controllers/auth";

const router = Router();

// 1) GET /auth → redirect to /auth/login
router.get("/", (_req, res) => res.redirect("/auth/login"));

// 2) Health check
router.get("/health", health);

// 3) Show login form at GET /auth/login
router.get("/login", renderLoginPage);

// 4) Process login at POST /auth/login
router.post("/login", login);

// 5) Logout
router.get("/logout", logout);

// 6) Password & account management
router.get("/forgot-password", renderForgotPasswordPage);

// 7) Signup
router.get("/signup", renderSignupPage);
router.post("/register", register);

// 8) (Optional) other in-auth pages
router.get("/student", renderStudentPage);
router.get("/overview", renderOverviewPage);

export default router;