"use strict";
// Filename: src/app.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const student_1 = require("./models/student");
const professor_1 = require("./models/professor");
const courses_1 = require("./models/courses");
const enrollment_1 = require("./models/enrollment");
const app = (0, express_1.default)();
// Configure EJS as the view engine
app.set("views", path_1.default.join(__dirname, "../src/views"));
app.set("view engine", "ejs");
// Built‑in middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.get("/", (req, res) => {
    // Sample data to test your TS classes
    const student = new student_1.Student("1", "Leon", "Kennedy", "leon.kennedy", "l@k.com", "pw123", "STU1001");
    const professor = new professor_1.Professor("P1", "Jane", "Smith", "jsmith", "jane@uni.edu", "pw456", "FAC2001");
    const aiCourse = new courses_1.Courses("Intro to AI", "AI101", "Basics of Artificial Intelligence.", professor.getName(), "MWF 10:00-11:00", "2025-01-15", "2025-05-15", "10:00 AM", "Room 101", 3, 30, [], []);
    const enrollment = new enrollment_1.Enrollment(student.id, aiCourse.courseCode, "2025-02-01");
    enrollment.setGrade("A");
    // Render the EJS template with data
    res.render("index", {
        studentName: student.getName(),
        courseName: aiCourse.getCourseName(),
        professorName: professor.getName(),
        grade: enrollment.getGrade(),
    });
});
exports.default = app;
