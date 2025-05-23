//
// Created by eudora on 4/14/25.
//

#ifndef ENROLLEASE_STUDENT_H
#define ENROLLEASE_STUDENT_H

#include "User.h"
#include <vector>
#include <string>

namespace EnrollEase {
    class Student : public User {
    private:
        std::string studentID;
        std::vector<std::string> enrolledCourses;

    public:
        // Constructor
        Student(std::string id, const std::string& fn, const std::string& ln,
                const std::string& un, const std::string& e,
                const std::string& p, const std::string& studentID);

        // Student-specific methods
        void viewCourseHistory() const;
        void browseCourses() const;
        void enrollCourse(const std::string& courseID);
        void checkGrades() const;
        bool dropCourse(const std::string& courseID);
        void viewSchedule() const;

        // Override from User
        std::string getRole() const override;
    };
}




#endif //ENROLLEASE_STUDENT_H
