# UB EnrollEase

**An Express + EJS + TypeScript application with PostgreSQL backend**

This repository contains a sample enrollment system converted from C++ into TypeScript, following an MVC pattern with:

- **Models** in `src/models/*.ts` (User, Student, Professor, Courses, Enrollment)
- **Services** for business logic and database access (`src/services/db.ts`, `*.service.ts`)
- **Controllers** for request handling (`src/controllers/*.ts`)
- **Routes** for URL mapping (`src/routes/*.ts`)
- **Views** in EJS templates (`src/views/*.ejs`)

---

## Prerequisites

1. **Node.js** (v18 or higher) and **npm**
2. **PostgreSQL** (and a database for this app)
3. **Git** (for cloning the repo)
4. **TypeScript compiler and tooling**

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/JaxenFyrsu/ubenrollease.git
cd ubenrollease

# 2. Install dependencies
npm install
```
---

## Development
```bash
# Run in watch mode (auto-reload)
npm run dev

# Open http://localhost:3000 in your browser

```

---

## Build & Production
```bash 
# 1. Compile TypeScript to JavaScript
npm run build   # emits TS into dist/

# 2. Start the compiled server
npm run dev       # runs dist/app.js

```

---

## Project Structure
```bash 
ubenrollease/
├─ dist/              # Compiled JS (after `npm run build or npm run watch`)
│  ├─ public/         # static files (css/js images)
│  ├─ views/          # EJS templates
├─ src/
│  ├─ config/         # Database connection
│  ├─ controllers/    # Express request handlers
│  ├─ models/         # Domain classes (TS implementations)
│  ├─ routes/         # Route definitions
│  ├─ services/       # Database connection & business logic
│  ├─ app.ts          # Express + EJS setup
├─ .env               # Environment variables (connects to an online test db)
├─ package.json       # npm metadata & scripts
├─ tsconfig.json      # TypeScript compiler options
└─ README.md          # This file

```

---

## npm Scripts
- ```npm run build```
Compiles all .ts files in src/ into .js in dist/ (CommonJS modules).

- ```npm run watch```
Launches the ts file watch to recompile /src/.ts to /dist/.js (hot reload).

- ```npm run dev```
Launches the app in development mode with nodemon (hot reload).

---