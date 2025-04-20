//
// Created by eudora on 4/14/25.
//

#include "Courses.h"
#include <iostream>
using namespace std;

namespace EnrollEase {
    // Constructor
    Courses::Courses(const std::string &courseName,
                     const std::string &courseCode,
                     const std::string &courseDescription,
                     const std::string &courseInstructor,
                     const std::string &courseSchedule,
                     const std::string &startDate,
                     const std::string &endDate,
                     const std::string &time,
                     const std::string &courseLocation,
                     int courseCredits,
                     int courseCapacity,
                     const std::vector<std::string> &prerequisites,
                     const std::vector<std::string> &corequisites)
        : courseName(courseName),
          courseCode(courseCode),
          courseDescription(courseDescription),
          courseInstructor(courseInstructor),
          courseSchedule(courseSchedule),
          startDate(startDate),
          endDate(endDate),
          time(time),
          courseLocation(courseLocation),
          courseCredits(courseCredits),
          courseCapacity(courseCapacity),
          prerequisites(prerequisites),
          corequisites(corequisites) {}

    void Courses::updateCourse(const CourseUpdate &updates) {
        if (!updates.newCourseName.empty()) {
            courseName = updates.newCourseName;
        }
        if (!updates.newCourseCode.empty()) {
            courseCode = updates.newCourseCode;
        }
        if (!updates.newCourseDescription.empty()) {
            courseDescription = updates.newCourseDescription;
        }
        if (!updates.newCourseInstructor.empty()) {
            courseInstructor = updates.newCourseInstructor;
        }
        if (!updates.newCourseSchedule.empty()) {
            courseSchedule = updates.newCourseSchedule;
        }
        if (!updates.newStartDate.empty()) {
            startDate = updates.newStartDate;
        }
        if (!updates.newEndDate.empty()) {
            endDate = updates.newEndDate;
        }
        if (!updates.newTime.empty()) {
            time = updates.newTime;
        }
        if (!updates.newCourseLocation.empty()) {
            courseLocation = updates.newCourseLocation;
        }
        if (updates.newCourseCredits != -1) {
            courseCredits = updates.newCourseCredits;
        }
        if (updates.newCourseCapacity != -1) {
            courseCapacity = updates.newCourseCapacity;
        }
        if (!updates.newPrerequisites.empty()) {
            prerequisites = updates.newPrerequisites;
        }
        if (!updates.newCorequisites.empty()) {
            corequisites = updates.newCorequisites;
        }

        cout << "[COURSE] Course \"" << courseCode << "\" updated successfully." << endl;
    }

    bool Courses::addStudent(int studentID) {
        if (enrolledStudents.size() < courseCapacity) {
            enrolledStudents.push_back(studentID);
            cout << "[COURSE] Student " << studentID << " enrolled in course \"" << courseCode << "\"." << endl;
            return true;
        } else {
            cout << "[COURSE] Course \"" << courseCode << "\" is full. Cannot enroll student " << studentID << "." << endl;
            return false;
        }
    }

    bool Courses::removeStudent(int studentID) {
        for (auto it = enrolledStudents.begin(); it != enrolledStudents.end(); ++it) {
            if (*it == studentID) {
                enrolledStudents.erase(it);
                cout << "[COURSE] Student " << studentID << " removed from course " << courseCode << endl;
                return true;
            }
        }
        cout << "[COURSE] Student " << studentID << " not found in course " << courseCode << endl;
        return false;
    }

    const vector<int>& Courses::getEnrolledStudents() const {
        return enrolledStudents;
    }

    string Courses::getCourseName() const { return courseName; }
    string Courses::getCourseCode() const { return courseCode; }
    string Courses::getCourseDescription() const { return courseDescription; }
    string Courses::getCourseInstructor() const { return courseInstructor; }
    string Courses::getCourseSchedule() const { return courseSchedule; }
    string Courses::getStartDate() const { return startDate; }
    string Courses::getEndDate() const { return endDate; }
    string Courses::getTime() const { return time; }
    string Courses::getCourseLocation() const { return courseLocation; }
    int Courses::getCourseCredits() const { return courseCredits; }
    int Courses::getCourseCapacity() const { return courseCapacity; }
    const vector<string>& Courses::getPrerequisites() const { return prerequisites; }
    const vector<string>& Courses::getCorequisites() const { return corequisites; }
}