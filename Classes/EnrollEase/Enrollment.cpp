//
// Created by eudora on 4/14/25.
//

#include "Enrollment.h"
#include <iostream>

using namespace std;

namespace EnrollEase {

    Enrollment::Enrollment(const string& sID,
                           int offID,
                           const string& date)
      : studentID(sID),
        offeringID(offID),
        enrollmentDate(date),
        grade('-')
    {}

    string Enrollment::getStudentID() const {
        return studentID;
    }

    int Enrollment::getOfferingID() const {
        return offeringID;
    }

    string Enrollment::getEnrollmentDate() const {
        return enrollmentDate;
    }

    char Enrollment::getGrade() const {
        return grade;
    }

    void Enrollment::setGrade(char newGrade) {
        grade = newGrade;
        cout << "[ENROLLMENT] Grade updated to '"
             << grade
             << "' for student " << studentID
             << " in offering " << offeringID
             << ".\n";
    }

}
