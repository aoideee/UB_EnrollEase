// src/controllers/auth/index.ts
import { Request, Response, NextFunction } from "express";
import { query } from "../../config/db";
import { AuthService } from "../../services/auth.service";

const authService = new AuthService();

/** Health check (database connectivity) */
export async function health(req: Request, res: Response) {
  try {
    await query("SELECT 1");
    res.status(200).json({ status: "OK" });
  } catch (err) {
    console.error("DB health check failed:", err);
    res.status(500).json({ error: "DB connection error" });
  }
}

/** Render login page */
export function renderLoginPage(req: Request, res: Response) {
  res.render("auth/login", { error: null });
}

/** Process login form */
export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    const user = await authService.authenticate(email, password);

    if (!user) {
      return res.render("auth/login", {
        error: "Invalid email or password.",
      });
    }

    // Store minimal user info in session
    req.session.user = {
      id: user.id,
      email: user.getEmail(),
      role: user.getRole(),
      name: user.getName(),
    };

    // Redirect to role‐specific dashboard
    switch (user.getRole()) {
      case "student":
        return res.redirect("/students/dashboard");
      case "professor":
        return res.redirect("/professors/dashboard");
      case "admin":
        return res.redirect("/admin/dashboard");
      default:
        return res.redirect("/auth/login");
    }
  } catch (err) {
    console.error("Login error:", err);
    next(err);
  }
}

/** Logout and destroy session */
export function logout(req: Request, res: Response) {
  req.session.destroy((err) => {
    if (err) console.error("Session destroy error:", err);
    res.redirect("/auth/login");
  });
}

/** Render signup page */
export function renderSignupPage(req: Request, res: Response) {
  res.render("auth/register", { error: null });
}

/** Process registration form */
export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { email, password, role } = req.body;
    const newUser = await authService.register({ email, password, role });

    // Auto‐login after signup
    req.session.user = {
      id: newUser.id,
      email: newUser.getEmail(),
      role: newUser.getRole(),
      name: newUser.getName(),
    };

    switch (newUser.getRole()) {
      case "student":
        return res.redirect("/students/dashboard");
      case "professor":
        return res.redirect("/professors/dashboard");
      case "admin":
        return res.redirect("/admin/dashboard");
      default:
        return res.redirect("/auth/login");
    }
  } catch (err: any) {
    console.error("Registration error:", err);
    if ((err as any).code === "23505") {
      return res.render("auth/register", {
        error: "That email is already registered.",
      });
    }
    next(err);
  }
}

/** Render “forgot password” page */
export function renderForgotPasswordPage(req: Request, res: Response) {
  res.render("auth/forgot-password", { error: null });
}

/** Render student dashboard */
export function renderStudentPage(req: Request, res: Response) {
  const user = req.session.user!;
  res.render("student/dashboard/index", { user });
}

/** Render professor dashboard */
export function renderProfessorPage(req: Request, res: Response) {
  const user = req.session.user!;
  res.render("professors/dashboard/index", { user });
}

/** Render admin dashboard */
export function renderOverviewPage(req: Request, res: Response) {
  const user = req.session.user!;
  res.render("admin/dashboard/index", { user });
}