// src/app.ts
import express from "express";
import session from "express-session";
import flash from "connect-flash";
import path from "path";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
import studentRouter from "./routes/students";
import professorRouter from "./routes/professors";
import adminRouter from "./routes/admin";
import { Request, Response, NextFunction } from "express";

dotenv.config();
const app = express();

// ——— Session + Flash ———
app.use(
  session({
    secret: process.env.SESSION_SECRET || "your-fallback-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// ——— Body parsers ———
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ——— Static assets ———
const staticDir =
  process.env.NODE_ENV === "production"
    ? path.join(__dirname, "public")
    : path.join(process.cwd(), "src", "public");
app.use(express.static(staticDir));

// ——— Views ———
app.set("view engine", "ejs");
const viewsDir =
  process.env.NODE_ENV === "production"
    ? path.join(__dirname, "views")
    : path.join(process.cwd(), "src", "views");
app.set("views", viewsDir);
app.locals.basedir = viewsDir;

// ——— Routes ———
app.get("/", (_req, res) => res.redirect("/auth/login"));
app.use("/auth", authRouter);
app.use("/students", studentRouter);
app.use("/professors", professorRouter);
app.use("/admin", adminRouter);

// ——— 404 + Error handlers ———
app.use((req, res) =>
  res.status(404).render("error", { message: "Page not found" })
);
app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).render("error", { message: "Something went wrong!" });
});

// ——— Start server ———
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

export default app;
