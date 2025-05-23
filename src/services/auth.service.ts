// src/services/auth.service.ts
import { query } from "../config/db";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import { Admin } from "../models/admin";
import { Professor } from "../models/professor";
import { Student } from "../models/student";

export class AuthService {
  /** Validate credentials against our single users table */
  async authenticate(email: string, password: string): Promise<User | null> {
    // fetch user row
    const { rows } = await query(
      `SELECT * FROM users WHERE email = $1 LIMIT 1`,
      [email]
    );
    const u = rows[0];
    if (!u) return null;

    // compare bcrypt hashes
    const ok = await bcrypt.compare(password, u.password_hash);
    if (!ok) return null;

    // build the appropriate subclass
    switch (u.role) {
      case "admin":
        return new Admin(u.id, u.name, u.email, u.role);
      case "professor":
        return new Professor(u.id, u.name, u.email, u.role);
      case "student":
        return new Student(u.id, u.name, u.email, u.role);
      default:
        return null;
    }
  }

  /** Create a new user (all roles in one table) */
  async register(input: {
    email: string;
    password: string;
    name?: string;
    role: "admin" | "professor" | "student";
  }): Promise<User> {
    const hash = await bcrypt.hash(input.password, 10);
    const { rows } = await query(
      `INSERT INTO users (email, password_hash, name, role)
       VALUES($1,$2,$3,$4)
       RETURNING *`,
      [input.email, hash, input.name || input.email.split("@")[0], input.role]
    );
    const u = rows[0];

    switch (u.role) {
      case "admin":
        return new Admin(u.id, u.name, u.email, u.role);
      case "professor":
        return new Professor(u.id, u.name, u.email, u.role);
      case "student":
        return new Student(u.id, u.name, u.email, u.role);
      default:
        throw new Error(`Unsupported role: ${u.role}`);
    }
  }
}