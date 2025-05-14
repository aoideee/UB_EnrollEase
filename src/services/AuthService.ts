// src/services/AuthService.ts
import { query } from '../config/db.js';
import { User } from '../models/user.js';
import { Admin } from '../models/admin.js';
import { Professor } from '../models/professor.js';
import { Student } from '../models/student.js';
import { DegreeType } from '../models/degreeType.js';

export class AuthService {
  async authenticate(email: string, password: string): Promise<User | null> {
    try {
      // Get base user data
      const userQuery = `
        SELECT * FROM users 
        WHERE email = $1 AND is_active = TRUE
      `;
      const userResult = await query(userQuery, [email]);

      if (userResult.rows.length === 0) return null;

      const userData = userResult.rows[0];

      // Verify password (in production, use bcrypt.compare)
      if (userData.password_hash !== password) return null;

      // Get role-specific data and create appropriate user instance
      switch (userData.role) {
        case 'admin':
          return await this.createAdmin(userData);
        case 'professor':
          return await this.createProfessor(userData);
        case 'student':
          return await this.createStudent(userData);
        default:
          return null;
      }

    } catch (error) {
      console.error('Authentication error:', error);
      return null;
    }
  }

  private async createAdmin(baseData: any): Promise<Admin> {
    const result = await query(`SELECT * FROM admins WHERE admin_id = $1`, [baseData.id]);
    const adminData = result.rows[0];

    return new Admin(
      baseData.id,
      baseData.first_name,
      baseData.last_name,
      baseData.email,
      baseData.password_hash,
      adminData.admin_id,
      adminData.access_level
    );
  }

  private async createProfessor(baseData: any): Promise<Professor> {
    const result = await query(`SELECT * FROM professors WHERE faculty_id = $1`, [baseData.id]);
    const profData = result.rows[0];

    return new Professor(
      baseData.id,
      baseData.first_name,
      baseData.last_name,
      baseData.email,
      baseData.password_hash,
      profData.faculty_id,
      profData.department,
      profData.officeLocation
    );
  }

  private async createStudent(baseData: any): Promise<Student> {
    const result = await query(`
        SELECT s.*, d.degree_name, d.degree_level, d.department 
        FROM students s
        JOIN degree_types d ON s.degree_code = d.degree_code
        WHERE s.student_id = $1
    `, [baseData.id]);
    
    const studentData = result.rows[0];

    // Create DegreeType instance first
    const degree = new DegreeType(
        studentData.degree_code,
        studentData.degree_name,
        studentData.degree_level,
        studentData.department
    );

    return new Student(
        baseData.id,
        baseData.first_name,
        baseData.last_name,
        baseData.email,
        baseData.password_hash,
        studentData.student_id,
        degree, // Now passing a DegreeType object
        new Date(studentData.enrollment_date),
        studentData.expected_graduation ? new Date(studentData.expected_graduation) : undefined,
        studentData.gpa
    );
}
}
