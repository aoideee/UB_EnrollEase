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

export default app;
