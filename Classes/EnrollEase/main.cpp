#include "SystemManager.h"
#include "Student.h"
#include "Professor.h"
#include "Courses.h"

using namespace EnrollEase;

int main() {
    SystemManager sys;

    // Create and register users
    Student* student = new Student("1001", "Angela", "Daniels", "angie_d", "angie@email.com", "1234", "1001");
    Professor* prof = new Professor("2001", "Dr.", "Maya", "maya_d", "maya@ub.edu", "prof123", "2001");



    sys.registerUser(student);
    sys.registerUser(prof);

    // Create and add a course
    Courses course(
        "Intro to AI",             // courseName
        "CS101",                   // courseCode
        "Fundamentals of AI",      // description
        "Dr. Maya",                // instructor
        "MWF",                     // schedule
        "2025-01-10",              // startDate
        "2025-05-01",              // endDate
        "9:00AM - 10:30AM",        // time
        "Online",                  // location
        3,                         // credits
        30,                        // capacity
        {},                        // prerequisites
        {}                         // corequisites
    );

    sys.addCourse(course);

    // Enroll the student in the course
    sys.enrollStudent(student->getUserID(), course.getCourseCode(), "2025-01-10");

    // Assign a grade
    sys.inputGrade(student->getUserID(), course.getCourseCode(), 'A');

    // List enrollments to confirm
    sys.listEnrollments();

    // Clean up
    delete student;
    delete prof;

    return 0;
}
