# UB_EnrollEase

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
``` bash
npm install --save-dev typescript ts-node ts-node-dev @types/node @types/express @types/ejs
```

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/aoideee/UB_EnrollEase.git
cd UB_EnrollEase

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
npm run build   # emits JS into dist/

# 2. Start the compiled server
npm start       # runs dist/server.js

```

---

## Project Structure
```bash 
UB_EnrollEase/
├─ src/
│  ├─ config/         # SQL schema, app configuration
│  ├─ models/         # Domain classes (TS implementations)
│  ├─ services/       # Database connection & business logic
│  ├─ controllers/    # Express request handlers
│  ├─ routes/         # Route definitions
│  ├─ views/          # EJS templates
│  ├─ app.ts          # Express + EJS setup
│  └─ server.ts       # Server bootstrap
├─ dist/              # Compiled JS (after `npm run build`)
├─ .env               # Environment variables (not committed)
├─ package.json       # npm metadata & scripts
├─ tsconfig.json      # TypeScript compiler options
└─ README.md          # This file

```

---

## npm Scripts
- ```npm run dev```
Launches the app in development mode with ts-node-dev (hot reload).

- ```npm run build```
Compiles all .ts files in src/ into .js in dist/ (CommonJS modules).

- ```npm start```
Runs the compiled dist/server.js under Node.js.

---

## Notes
- To run the TypeScript directly without building, you can use:

  ```bash
  npx ts-node src/server.ts
  ```
- Ensure your ```.env``` is listed in ```.gitignore``` (it is by default).
- Use ```npm run dev``` during active development; ```npm run build && npm start``` for production.
- Modify ```src/config/schema.sql``` to adjust your database schema as needed.
