//
// Created by eudora on 4/14/25.
//

#include "Enrollment.h"
#include <iostream>

using namespace std;

namespace EnrollEase {

    Enrollment::Enrollment(string sID, const string& cID, const string& date)
        : studentID(sID), courseID(cID), enrollmentDate(date), grade('-') {}

    string Enrollment::getStudentID() const {
        return studentID;
    }

    string Enrollment::getCourseID() const {
        return courseID;
    }

    string Enrollment::getEnrollmentDate() const {
        return enrollmentDate;
    }

    char Enrollment::getGrade() const {
        return grade;
    }

    void Enrollment::setGrade(char newGrade) {
        grade = newGrade;
        cout << "[ENROLLMENT] Grade updated to '" << grade
             << "' for student " << studentID
             << " in course " << courseID << ".\n";
    }

}