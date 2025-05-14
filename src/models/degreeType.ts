export class DegreeType {
    constructor(
        public readonly code: string,       // e.g. 'AINT'
        public readonly name: string,       // e.g. 'Associates in IT'
        public readonly level: string,      // e.g. 'Associates'
        public readonly department: string
    ) {}

    toString(): string {
        return `${this.level} in ${this.name}`;
    }

    get fullName(): string {
        return `${this.code} - ${this.level} in ${this.name}`;
    }
}