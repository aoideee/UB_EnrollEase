"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, firstName, lastName, username, email, password) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
    /** Full name: first + last */
    getName() {
        return `${this.firstName} ${this.lastName}`;
    }
    /** User's email */
    getEmail() {
        return this.email;
    }
    /** Role: "User" by default */
    getRole() {
        return "User";
    }
}
exports.User = User;
