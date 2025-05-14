export class Semester {
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
}
