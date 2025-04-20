//
// Created by eudora on 4/14/25.
//

#ifndef ENROLLEASE_ENROLLMENT_H
#define ENROLLEASE_ENROLLMENT_H

#include <string>

namespace EnrollEase {

    class Enrollment {
    private:
        std::string studentID;
        std::string courseID;
        std::string enrollmentDate;
        char grade;

    public:
        // Constructor
        Enrollment(std::string sID, const std::string& cID, const std::string& date);

        // Getters
        std::string getStudentID() const;
        std::string getCourseID() const;
        std::string getEnrollmentDate() const;
        char getGrade() const;

        // Setter
        void setGrade(char newGrade);
    };

}



#endif //ENROLLEASE_ENROLLMENT_H
