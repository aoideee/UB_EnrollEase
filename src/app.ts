<<<<<<< HEAD
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

=======
// Filename: src/app.ts

import express, { Request, Response } from "express";
import path from "path";

import { Student } from "./models/student";
import { Professor } from "./models/professor";
import { Courses } from "./models/courses";
import { CourseOffering } from "./models/courseOffering";
import { Enrollment } from "./models/enrollment";

const app = express();

// Configure EJS as the view engine
app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");

// Built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req: Request, res: Response) => {
  // Sample data to test your TS classes
  const student = new Student(
    "1",
    "Leon",
    "Kennedy",
    "leon.kennedy",
    "l@k.com",
    "pw123",
    "STU1001"
  );

  const professor = new Professor(
    "P1",
    "Jane",
    "Smith",
    "jsmith",
    "jane@uni.edu",
    "pw456",
    "FAC2001"
  );

  const aiCourse = new Courses(
    "Intro to AI", // courseName
    "AI101", // courseCode
    "Basics of Artificial Intelligence.", // description
    professor.getName(), // instructor
    "MWF 10:00-11:00", // schedule
    "2025-01-15", // startDate
    "2025-05-15", // endDate
    "10:00 AM", // time
    "Room 101", // location
    3, // credits
    30, // capacity
    [], // prerequisites
    [] // corequisites
  );

  // Create a CourseOffering (hard-code schedule here too)
  const offering = new CourseOffering(
    1, // offeringID (number)
    aiCourse.courseCode, // courseID (string)
    1, // semesterID (number)
    professor.getName(), // instructor
    "MWF 10:00-11:00" // schedule (literal)
  );

  // Enroll the student
  const enrollment = new Enrollment(
    student.id, // studentID (string)
    offering.getOfferingID(), // offeringID (number)
    "2025-02-01" // enrollmentDate
  );
  enrollment.setGrade("A");

  // Render the EJS template with data
  res.render("index", {
    studentName: student.getName(),
    courseName: aiCourse.getCourseName(),
    professorName: professor.getName(),
    grade: enrollment.getGrade(),
  });
});

>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95
export default app;
