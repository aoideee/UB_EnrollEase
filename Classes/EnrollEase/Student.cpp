//
// Created by eudora on 4/14/25.
//

#include "Student.h"
#include <iostream>
using namespace std;

namespace EnrollEase {
    Student::Student(string id, const string& fn, const string& ln,
                     const string& un, const string& e,
                     const string& p, const string& studentID)
        : User(id, fn, ln, un, e, p), studentID(studentID) {}

    void Student::viewCourseHistory() const {
        cout << "[STUDENT] Course Enrollment History:\n";
        for (const string & course : enrolledCourses) {
            cout << "- " << course << endl;
        }
    }

    void Student::browseCourses() const {
        cout << "[STUDENT] Browsing available courses... (mocked output)\n";
    }

    void Student::enrollCourse(const string& courseID) {
        for (const string &c : enrolledCourses) {
            if (c == courseID) {
                cout << "[STUDENT] Already enrolled in course: " << courseID << endl;
                return;
            }
        }
        enrolledCourses.push_back(courseID);
        cout << "[STUDENT] Enrolled in course: " << courseID << endl;
    }

    void Student::checkGrades() const {
        cout << "[STUDENT] Checking grades... (mocked output)\n";
    }

    bool Student::dropCourse(const std::string &courseID) {
        for (auto it = enrolledCourses.begin(); it != enrolledCourses.end(); it++) {
            if (*it == courseID) {
                enrolledCourses.erase(it);
                cout << "[STUDENT] Dropped course: " << courseID << endl;
                return true;
            }
        }
        cout << "[STUDENT] Course not found in enrolled list: " << courseID << endl;
        return false;
    }

    void Student::viewSchedule() const {
        cout << "[STUDENT] Viewing schedule for enrolled courses:\n";
        for (const string & course : enrolledCourses) {
            cout << "- " << course << endl;
        }
    }

    string Student::getRole() const {
        return "Student";
    }

}