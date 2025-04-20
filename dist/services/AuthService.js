"use strict";
// Filename: services/AuthService.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
class AuthService {
    constructor() {
        this.users = [];
    }
    register(user) {
        this.users.push(user);
        console.log(`[AUTH] Registered user: ${user.getName()}`);
    }
    login(username, password) {
        const user = this.users.find((u) => u.username === username);
        return user ?? null;
    }
}
exports.AuthService = AuthService;
