//
// Created by eudora on 4/14/25.
//

#include "Professor.h"
#include <iostream>
#include <string>
using namespace std;

namespace EnrollEase {
    Professor::Professor(string id, const std::string& fn, const std::string& ln,
                     const std::string& un, const std::string& e,
                     const std::string& p, string facultyID)
    : User(id, fn, ln, un, e, p), facultyID(facultyID) {}



    void Professor::viewStudents(const string &courseID) const {
        cout << "[PROFESSOR] Viewing students in course: " << courseID << endl;
        // Placeholder: COnnect to Course or Enrollement system later
    }

    void Professor::inputGrades(const string &courseID, const string &studentID, char grade) const{
        cout << "[PROFESSOR] Inputting grade for student " << studentID
             << " in course " << courseID << ": " << grade << endl;
        // Placeholder: Connect to Course or Enrollment system later
    }

    string Professor::getRole() const {
        return "Professor";
    }

}