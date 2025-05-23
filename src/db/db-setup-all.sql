-- db/db-setup-full.sql

-- 1) Drop & recreate the local DB and user
DROP DATABASE IF EXISTS ubenrollease;
DROP USER IF EXISTS ubenrollease;
CREATE USER ubenrollease WITH PASSWORD 'ubenrollease';
CREATE DATABASE ubenrollease OWNER ubenrollease;
GRANT ALL PRIVILEGES ON DATABASE ubenrollease TO ubenrollease;

-- 2) Connect into the newly created database
\connect ubenrollease

-- 3) Enable pgcrypto for password hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 4) Create departments table
CREATE TABLE IF NOT EXISTS departments (
  id   SERIAL PRIMARY KEY,
  name TEXT   UNIQUE   NOT NULL
);

-- 5) Create users table (with department assignment)
CREATE TABLE IF NOT EXISTS users (
  id            SERIAL     PRIMARY KEY,
  email         TEXT       UNIQUE   NOT NULL,
  password_hash TEXT               NOT NULL,
  name          TEXT               NOT NULL,
  role          TEXT       NOT NULL CHECK (role IN ('student','professor','admin')),
  department_id INTEGER    REFERENCES departments(id) ON DELETE SET NULL,
  created_at    TIMESTAMP          DEFAULT NOW()
);

-- 6) Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id              SERIAL       PRIMARY KEY,
  code            VARCHAR(10)  NOT NULL,
  title           VARCHAR(100) NOT NULL,
  description     TEXT,
  program         VARCHAR(50),
  credits         INTEGER,
  capacity        INTEGER,
  schedule        VARCHAR(50),
  professor_id    INTEGER      REFERENCES users(id) ON DELETE SET NULL,
  department_id   INTEGER      REFERENCES departments(id) ON DELETE SET NULL,
  enroll_deadline DATE,
  drop_deadline   DATE
);

-- 7) Create enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
  id           SERIAL      PRIMARY KEY,
  student_id   INTEGER     NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  course_id    INTEGER     NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  enrolled_at  TIMESTAMP   DEFAULT NOW(),
  grade        VARCHAR(2)  CHECK (grade ~ '^[A-D][+-]?$|^F$'),
  UNIQUE(student_id, course_id)
);

-- 8) Seed departments
INSERT INTO departments (name) VALUES
  ('Engineering & IT'),
  ('Science & Math'),
  ('Arts & Humanities');

-- 9) Seed users (3 students, 4 professors, 1 admin), assigning each to a department
INSERT INTO users (email, password_hash, name, role, department_id) VALUES
  -- Students belong to Engineering & IT (dept id=1)
  ('student1@school.edu',  crypt('temp_password', gen_salt('bf', 10)), 'Alice Student',     'student',   1),
  ('student2@school.edu',  crypt('temp_password', gen_salt('bf', 10)), 'Bob Learner',       'student',   1),
  ('student3@school.edu',  crypt('temp_password', gen_salt('bf', 10)), 'Cara Scholar',      'student',   1),

  -- Professors assigned to various departments
  ('lecturer1@school.edu', crypt('temp_password', gen_salt('bf', 10)), 'Dr. Dan Teaching',  'professor', 1),
  ('lecturer2@school.edu', crypt('temp_password', gen_salt('bf', 10)), 'Dr. Eve Instruct',  'professor', 2),
  ('lecturer3@school.edu', crypt('temp_password', gen_salt('bf', 10)), 'Dr. Carla Code',    'professor', 1),
  ('lecturer4@school.edu', crypt('temp_password', gen_salt('bf', 10)), 'Dr. Mike Metadata', 'professor', 2),

  -- Admin (no department)
  ('admin@school.edu',     crypt('temp_password', gen_salt('bf', 10)), 'Site Admin',        'admin',     NULL);

-- 10) Seed all 27 AINT courses with professor_id & department_id
INSERT INTO courses (code, title, description, program, credits, capacity, schedule, professor_id, department_id, enroll_deadline, drop_deadline) VALUES
  -- Year 1, Semester I (professor_id refers to users.id; dept as per course subject)
  ('CMPS1134','Fundamentals of Computing',             NULL,'AINT',3,30,'TBA',4,1,'2025-01-20','2025-02-05'),
  ('CMPS1131','Principles of Programming I',           NULL,'AINT',3,30,'TBA',4,1,'2025-01-20','2025-02-05'),
  ('MATH1151','Algebra',                               NULL,'AINT',3,30,'TBA',NULL,2,'2025-01-20','2025-02-05'),
  ('MATH1201','Trigonometry',                          NULL,'AINT',3,30,'TBA',NULL,2,'2025-01-20','2025-02-05'),
  ('ENGL1014','College English I',                     NULL,'AINT',3,30,'TBA',NULL,3,'2025-01-20','2025-02-05'),
  ('CRTH1014','Critical Thinking',                     NULL,'AINT',3,30,'TBA',NULL,3,'2025-01-20','2025-02-05'),

  -- Year 1, Semester II
  ('CMPS1232','Principles of Programming II',          NULL,'AINT',3,30,'TBA',5,1,'2025-06-20','2025-07-05'),
  ('CMPS1211','Hardware Fundamentals',                 NULL,'AINT',3,30,'TBA',5,1,'2025-06-20','2025-07-05'),
  ('CMPS1171','Introduction to Databases',             NULL,'AINT',3,30,'TBA',5,1,'2025-06-20','2025-07-05'),
  ('MATH1302','Calculus I',                            NULL,'AINT',3,30,'TBA',NULL,2,'2025-06-20','2025-07-05'),
  ('ENGL1025','College English II',                    NULL,'AINT',3,30,'TBA',NULL,3,'2025-06-20','2025-07-05'),
  ('PHIL1014','Ethics',                                NULL,'AINT',3,30,'TBA',NULL,3,'2025-06-20','2025-07-05'),

  -- Year 2, Semester I
  ('CMPS2131','Data Structures',                       NULL,'AINT',3,30,'TBA',6,1,'2025-01-20','2025-02-05'),
  ('CMPS2111','Systems Analysis',                      NULL,'AINT',3,30,'TBA',6,1,'2025-01-20','2025-02-05'),
  ('CMPS2151','Web Development',                       NULL,'AINT',3,30,'TBA',6,1,'2025-01-20','2025-02-05'),
  ('MATH2201','Calculus II',                           NULL,'AINT',3,30,'TBA',NULL,2,'2025-01-20','2025-02-05'),
  ('CMPS1191','Networking Fundamentals',               NULL,'AINT',3,30,'TBA',6,1,'2025-01-20','2025-02-05'),
  ('MGMT1014','Fundamentals of Management',            NULL,'AINT',3,30,'TBA',NULL,3,'2025-01-20','2025-02-05'),
  ('ECON1014','Introduction to Economics',             NULL,'AINT',3,30,'TBA',NULL,3,'2025-01-20','2025-02-05'),
  ('SPAN1025','Level 2 Intermediate Spanish',          NULL,'AINT',3,30,'TBA',NULL,3,'2025-01-20','2025-02-05'),

  -- Year 2, Semester II
  ('CMPS2212','GUI Programming',                       NULL,'AINT',3,30,'TBA',7,1,'2025-06-20','2025-07-05'),
  ('CMPS2232','Object Oriented Systems Development',   NULL,'AINT',3,30,'TBA',7,1,'2025-06-20','2025-07-05'),
  ('CMPS2242','Systems Programming & Computer Organization',NULL,'AINT',3,30,'TBA',7,1,'2025-06-20','2025-07-05'),
  ('CMPS2992','Project',                               NULL,'AINT',3,30,'TBA',7,1,'2025-06-20','2025-07-05'),
  ('PSYC1014','Social Studies Elective: Psychology',   NULL,'AINT',3,30,'TBA',NULL,3,'2025-06-20','2025-07-05'),
  ('SOCL1014','Social Studies Elective: Sociology',    NULL,'AINT',3,30,'TBA',NULL,3,'2025-06-20','2025-07-05'),
  ('HIST1014','Belizean History',                     NULL,'AINT',3,30,'TBA',NULL,3,'2025-06-20','2025-07-05')
;

-- 11) Grant privileges on tables and sequences
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO ubenrollease;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO ubenrollease;