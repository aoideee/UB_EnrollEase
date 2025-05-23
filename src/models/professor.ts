// src/models/professor.ts

import { User } from "./user";

export class Professor extends User {
  constructor(
    id: string,
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
