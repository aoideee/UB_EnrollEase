export class Semester {
<<<<<<< HEAD
    constructor(
        public readonly semesterId: string,
        public readonly name: string,
        public readonly startDate: Date,
        public readonly endDate: Date,
        public isActive: boolean = false
    ) { }

    // Check if a given date falls within this semester
    containsDate(date: Date = new Date()): boolean {
        return date >= this.startDate && date <= this.endDate;
    }

    // Check if the semester is in the past
    isPast(): boolean {
        return new Date() > this.endDate;
    }

    // Check if the semester is in the future
    isFuture(): boolean {
        return new Date() < this.startDate;
    }

    // Get duration in weeks
    getDurationInWeeks(): number {
        const msPerWeek = 1000 * 60 * 60 * 24 * 7;
        return Math.ceil((this.endDate.getTime() - this.startDate.getTime()) / msPerWeek);
    }
=======
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
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95
}
