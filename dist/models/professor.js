"use strict";
// Filename: src/models/student.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
const user_1 = require("./user");
class Professor extends user_1.User {
    constructor(id, firstName, lastName, username, email, password, facultyID) {
        super(id, firstName, lastName, username, email, password);
        this.facultyID = facultyID;
    }
    getRole() {
        return "Professor";
    }
}
exports.Professor = Professor;
