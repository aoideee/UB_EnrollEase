"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Semester = void 0;
class Semester {
    constructor(id, name, startDate, // "YYYY-MM-DD"
    endDate // "YYYY-MM-DD"
    ) {
        this.id = id;
        this.name = name;
        this.startDate = startDate;
        this.endDate = endDate;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getStartDate() {
        return this.startDate;
    }
    getEndDate() {
        return this.endDate;
    }
    setName(name) {
        this.name = name;
    }
    setStartDate(startDate) {
        this.startDate = startDate;
    }
    setEndDate(endDate) {
        this.endDate = endDate;
    }
}
exports.Semester = Semester;
