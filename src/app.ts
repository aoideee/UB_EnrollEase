// Filename: src/app.ts

import express, { Request, Response } from "express";
import path from "path";

import { Student } from "./models/student";
import { Professor } from "./models/professor";
import { Courses } from "./models/courses";
import { Enrollment } from "./models/enrollment";

const app = express();

// Configure EJS as the view engine
app.set("views", path.join(__dirname, "../src/views"));
app.set("view engine", "ejs");

// Built‑in middleware
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
    "Intro to AI",
    "AI101",
    "Basics of Artificial Intelligence.",
    professor.getName(),
    "MWF 10:00-11:00",
    "2025-01-15",
    "2025-05-15",
    "10:00 AM",
    "Room 101",
    3,
    30,
    [],
    []
  );

  const enrollment = new Enrollment(
    student.id,
    aiCourse.courseCode,
    "2025-02-01"
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

export default app;
