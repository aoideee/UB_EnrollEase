// SystemManager.cpp
#include "SystemManager.h"
#include <iostream>
using namespace std;

namespace EnrollEase {

    void SystemManager::registerUser(User* user) {
        users.push_back(user);
        std::cout << "[SYSTEM] Registered user: " << user->getName() << " (" << user->getRole() << ")\n";
    }

    void SystemManager::addCourse(const Courses& course) {
        courses.push_back(course);
        std::cout << "[SYSTEM] Added course: " << course.getCourseCode() << " - " << course.getCourseName() << "\n";
    }

    void SystemManager::enrollStudent(string studentID, const std::string& courseID, const std::string& date) {
        enrollments.emplace_back(studentID, courseID, date);
        std::cout << "[SYSTEM] Enrolled student " << studentID << " in course " << courseID << "\n";
    }

    void SystemManager::inputGrade(string studentID, const std::string& courseID, char grade) {
        for (Enrollment& e : enrollments) {
            if (e.getStudentID() == studentID && e.getCourseID() == courseID) {
                e.setGrade(grade);
                return;
            }
        }
        std::cout << "[SYSTEM] Enrollment not found for student " << studentID << " in course " << courseID << "\n";
    }

    void SystemManager::listEnrollments() const {
        std::cout << "\n[SYSTEM] All Enrollments:\n";
        for (const Enrollment& e : enrollments) {
            std::cout << " - Student ID: " << e.getStudentID()
                      << ", Course: " << e.getCourseID()
                      << ", Grade: " << e.getGrade() << "\n";
        }
    }

} // namespace EnrollEase
