#ifndef ENROLLEASE_SYSTEMMANAGER_H
#define ENROLLEASE_SYSTEMMANAGER_H

#include "User.h"
#include "Courses.h"
#include "Enrollment.h"
#include <vector>
#include <string>

namespace EnrollEase {

    class SystemManager {
    private:
        std::vector<User*> users;
        std::vector<Courses> courses;
        std::vector<Enrollment> enrollments;

    public:
        void registerUser(User* user);
        void addCourse(const Courses& course);
        void enrollStudent(std::string studentID, const std::string& courseID, const std::string& date);
        void inputGrade(std::string studentID, const std::string& courseID, char grade);
        void listEnrollments() const;
    };

}

#endif // ENROLLEASE_SYSTEMMANAGER_H
