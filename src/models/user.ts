<<<<<<< HEAD
// src/models/user.ts
export abstract class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string,
    protected role: string
  ) {}

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public abstract getRole(): string;
}
=======
export class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public username: string,
    public email: string,
    protected password: string
  ) {}

  /** Full name: first + last */
  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  /** User's email */
  getEmail(): string {
    return this.email;
  }

  /** Role: "User" by default */
  getRole(): string {
    return "User";
  }
}
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95
