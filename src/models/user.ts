// src/models/User.ts
export class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    protected role: string = "user"
  ) {}

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getEmail(): string {
    return this.email;
  }

  getRole(): string {
    return this.role;
  }
}