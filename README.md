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

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/UB_EnrollEase.git
cd UB_EnrollEase

# 2. Install dependencies
npm install

# 3. Create a .env file at project root with your database URL
#    (or set DATABASE_URL in your environment)
# Example .env:
# DATABASE_URL=postgres://user:password@localhost:5432/yourdb
echo "DATABASE_URL=postgres://user:password@localhost:5432/yourdb" > .env

# 4. Create your database tables (run SQL in src/config or via psql)
psql $DATABASE_URL -f src/config/schema.sql
