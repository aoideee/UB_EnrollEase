// src/models/User.ts
export abstract class User {
  constructor(
    public readonly id: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly email: string,
    protected readonly password: string, // Changed to passwordHash for security clarity
    protected role: string // No default value since child classes must define it
  ) {}

  // Public methods
  public getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public getEmail(): string {
    return this.email;
  }

  // Abstract method forces child classes to implement
  public abstract getRole(): string;
}