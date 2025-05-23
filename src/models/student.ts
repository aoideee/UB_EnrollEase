<<<<<<< HEAD
// src/models/student.ts

import { User } from "./user";
=======
import { User } from './user';
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95

export class Student extends User {
  constructor(
    id: string,
<<<<<<< HEAD
    name: string,
    email: string,
    role: string = "student"
  ) {
    super(id, name, email, role);
  }

  public override getRole(): string {
    return "student";
=======
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    public studentID: string
  ) {
    super(id, firstName, lastName, username, email, password);
  }

  getRole(): string {
    return "Student";
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95
  }
}