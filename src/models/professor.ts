<<<<<<< HEAD
// src/models/professor.ts
=======
// Filename: src/models/student.ts
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95

import { User } from "./user";

export class Professor extends User {
  constructor(
    id: string,
<<<<<<< HEAD
    name: string,
    email: string,
    role: string = "professor"
  ) {
    super(id, name, email, role);
  }

  public override getRole(): string {
    return "professor";
  }
}
=======
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    public facultyID: string
  ) {
    super(id, firstName, lastName, username, email, password);
  }

  getRole(): string {
    return "Professor";
  }
}
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95
