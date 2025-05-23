<<<<<<< HEAD
# UB EnrollEase
=======
# UB_EnrollEase
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95

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
<<<<<<< HEAD
=======
``` bash
npm install --save-dev typescript ts-node ts-node-dev @types/node @types/express @types/ejs
```
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95

---

## Getting Started

```bash
# 1. Clone the repository
<<<<<<< HEAD
git clone https://github.com/JaxenFyrsu/ubenrollease.git
cd ubenrollease
=======
git clone https://github.com/aoideee/UB_EnrollEase.git
cd UB_EnrollEase
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95

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
<<<<<<< HEAD
npm run build   # emits TS into dist/

# 2. Start the compiled server
npm run dev       # runs dist/app.js
=======
npm run build   # emits JS into dist/

# 2. Start the compiled server
npm start       # runs dist/server.js
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95

```

---

## Project Structure
```bash 
<<<<<<< HEAD
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
=======
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
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95
├─ package.json       # npm metadata & scripts
├─ tsconfig.json      # TypeScript compiler options
└─ README.md          # This file

```

---

## npm Scripts
<<<<<<< HEAD
- ```npm run build```
Compiles all .ts files in src/ into .js in dist/ (CommonJS modules).

- ```npm run watch```
Launches the ts file watch to recompile /src/.ts to /dist/.js (hot reload).

- ```npm run dev```
Launches the app in development mode with nodemon (hot reload).

---
=======
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
>>>>>>> 3c2075c122738a12ae63f376a144582430dd3f95
