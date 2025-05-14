export class Semester {
  constructor(
    public id: number,
    public name: string,
    public startDate: string, // "YYYY-MM-DD"
    public endDate: string // "YYYY-MM-DD"
  ) {}

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getStartDate(): string {
    return this.startDate;
  }

  getEndDate(): string {
    return this.endDate;
  }

  setName(name: string): void {
    this.name = name;
  }

  setStartDate(startDate: string): void {
    this.startDate = startDate;
  }

  setEndDate(endDate: string): void {
    this.endDate = endDate;
  }
}
