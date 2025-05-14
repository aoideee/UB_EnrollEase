type LetterGrade = 'A' | 'B' | 'C' | 'D' | 'F';

export class Enrollment {
    private _grade?: LetterGrade;
    private readonly _enrollmentDate: Date;

    constructor(
        public readonly studentId: string,
        public readonly courseId: string,
        public readonly semesterId: string,
        enrollmentDate: Date | string = new Date()
    ) {
        this._enrollmentDate = typeof enrollmentDate === 'string' 
            ? new Date(enrollmentDate) 
            : enrollmentDate;
    }

    // Grade management with strict A-F validation
    setGrade(grade: LetterGrade): void {
        const validGrades: LetterGrade[] = ['A', 'B', 'C', 'D', 'F'];
        if (!validGrades.includes(grade)) {
            throw new Error(`Invalid grade: ${grade}. Must be one of: ${validGrades.join(', ')}`);
        }
        this._grade = grade;
    }

    getGrade(): LetterGrade | undefined {
        return this._grade;
    }

    // Grade point conversion (4.0 scale)
    getGradePoints(): number | undefined {
        if (!this._grade) return undefined;
        
        const gradePointMap: Record<LetterGrade, number> = {
            'A': 4.0,
            'B': 3.0,
            'C': 2.0,
            'D': 1.0,
            'F': 0.0
        };
        return gradePointMap[this._grade];
    }

    // Date accessor
    getEnrollmentDate(): Date {
        return new Date(this._enrollmentDate);
    }

    // Status checks
    hasPassingGrade(): boolean | undefined {
        return this._grade ? this._grade !== 'F' : undefined;
    }

    isGraded(): boolean {
        return this._grade !== undefined;
    }
}
