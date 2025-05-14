import { Request, Response } from 'express';
import { query } from '../config/db.js';
import { error } from 'console';

export class ProfileController {
    // Fetch profile data for the logged-in user
    static async getProfile(req: Request, res: Response): Promise<void> {
        try {
            const user = req.session.user;

            if (!user) {
                return res.redirect('/auth/login');
            }

            // Fetch user details from the users table
            const userResult = await query(
                `SELECT first_name, last_name, email, city, address, phone_number, country
                 FROM users
                 WHERE id = $1`,
                [user.id]
            );

            const userData = userResult.rows[0];

            // Fetch student details from the students table
            const studentResult = await query(
                `SELECT degree_code, enrollment_date, gpa, expected_graduation
                 FROM students
                 WHERE student_id = $1`,
                [user.id]
            );

            const studentData = studentResult.rows[0];

            res.render('profile', {
                user: {
                    ...user,
                    ...userData,
                    ...studentData,
                },
                error: null,
            });
        } catch (error) {
            console.error('Error fetching profile data:', error);
            res.status(500).send('Internal Server Error');
        }
    }

    // Update username and password
    static async updateProfile(req: Request, res: Response): Promise<void> {
        try {
            const { username, password, confirmPassword } = req.body;
            const user = req.session.user;

            if (!user) {
                return res.redirect('/auth/login');
            }

            // Validate password
            if (password !== confirmPassword) {
                return res.render('profile', {
                    user: { ...user }, // Only pass the basic user info back
                    error: 'Passwords do not match.',
                });
            }

            if (password.length < 8 || password.length > 15) {
                return res.render('profile', {
                    user: { ...user }, // Only pass the basic user info back
                    error: 'Password must be between 8 and 15 characters.',
                });
            }

            // Update username and password in the users table
            await query(
                `UPDATE users
                 SET email = $1, password_hash = crypt($2, gen_salt('bf'))
                 WHERE id = $3`,
                [username, password, user.id]
            );

            res.redirect('/student/profile');
        } catch (error) {
            console.error('Error updating profile:', error);
            res.status(500).send('Internal Server Error');
        }
    }
}