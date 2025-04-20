import { User } from './user';

export class Student extends User {
  constructor(
    id: string,
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
  }
}