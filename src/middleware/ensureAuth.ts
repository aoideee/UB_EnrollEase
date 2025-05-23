// src/middleware/ensureAuth.ts
import { Request, Response, NextFunction } from "express";

export default function ensureAuth(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // If you’re storing your logged-in user on session.user:
  if (req.session?.user) {
    return next();
  }

  // Otherwise redirect to login
  req.flash("error", "Please log in to access that page.");
  res.redirect("/auth/login");
}