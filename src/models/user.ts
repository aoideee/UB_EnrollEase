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