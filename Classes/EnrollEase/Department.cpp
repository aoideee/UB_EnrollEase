//
// Created by eudora on 4/14/25.
//

#include "Department.h"
#include <iostream>
#include <algorithm> // for std::find

using namespace std;

namespace EnrollEase {

    Department::Department(const string& name)
        : departmentName(name) {}

    void Department::addCourse(const string& courseID) {
        if (find(courseIDs.begin(), courseIDs.end(), courseID) == courseIDs.end()) {
            courseIDs.push_back(courseID);
            cout << "[DEPT] Added course \"" << courseID << "\" to " << departmentName << endl;
        } else {
            cout << "[DEPT] Course \"" << courseID << "\" already exists in " << departmentName << endl;
        }
    }

    void Department::addFaculty(int facultyID) {
        if (find(facultyIDs.begin(), facultyIDs.end(), facultyID) == facultyIDs.end()) {
            facultyIDs.push_back(facultyID);
            cout << "[DEPT] Added faculty ID " << facultyID << " to " << departmentName << endl;
        } else {
            cout << "[DEPT] Faculty ID " << facultyID << " is already in " << departmentName << endl;
        }
    }

    vector<string> Department::getCourses() const {
        return courseIDs;
    }

    vector<int> Department::getFaculty() const {
        return facultyIDs;
    }

}