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
