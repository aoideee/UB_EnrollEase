// src/models/Admin.ts

import { User } from "./user";

export class Admin extends User {
  constructor(id: string, name: string, email: string, role: string = "admin") {
    super(id, name, email, role);
  }

  public override getRole(): string {
    return "admin";
  }
}
