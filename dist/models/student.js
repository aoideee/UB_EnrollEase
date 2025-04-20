"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const user_1 = require("./user");
class Student extends user_1.User {
    constructor(id, firstName, lastName, username, email, password, studentID) {
        super(id, firstName, lastName, username, email, password);
        this.studentID = studentID;
    }
    getRole() {
        return "Student";
    }
}
exports.Student = Student;
