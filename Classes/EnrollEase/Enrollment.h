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
        int         offeringID;      // was courseID
        std::string enrollmentDate;
        char        grade;

    public:
        // Constructor
        Enrollment(const std::string& sID,
                   int offID,
                   const std::string& date);

        // Getters
        std::string getStudentID() const;
        int         getOfferingID() const;
        std::string getEnrollmentDate() const;
        char        getGrade() const;

        // Setter
        void setGrade(char newGrade);
    };

}



#endif //ENROLLEASE_ENROLLMENT_H
