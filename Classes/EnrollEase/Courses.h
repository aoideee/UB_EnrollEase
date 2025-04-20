//
// Created by eudora on 4/14/25.
//

#ifndef ENROLLEASE_COURSES_H
#define ENROLLEASE_COURSES_H

#include <string>
#include <vector>

namespace EnrollEase {

    struct CourseUpdate {
        std::string newCourseName = "";
        std::string newCourseCode = "";
        std::string newCourseDescription = "";
        std::string newCourseInstructor = "";
        std::string newCourseSchedule = "";
        std::string newStartDate = "";
        std::string newEndDate = "";
        std::string newTime = "";
        std::string newCourseLocation = "";
        int newCourseCredits = -1;
        int newCourseCapacity = -1;
        std::vector<std::string> newPrerequisites;
        std::vector<std::string> newCorequisites;

        // Default constructor
        CourseUpdate() = default;

        // Constructor with parameters
        // This constructor allows you to create a CourseUpdate object with all the necessary information.
        CourseUpdate(const std::string &courseName,
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
                : newCourseName(courseName),
                  newCourseCode(courseCode),
                  newCourseDescription(courseDescription),
                  newCourseInstructor(courseInstructor),
                  newCourseSchedule(courseSchedule),
                  newStartDate(startDate),
                  newEndDate(endDate),
                  newTime(time),
                  newCourseLocation(courseLocation),
                  newCourseCredits(courseCredits),
                  newCourseCapacity(courseCapacity),
                  newPrerequisites(prerequisites),
                  newCorequisites(corequisites) {}
    };
    

    class Courses {
        private:
            std::string courseName;
            std::string courseCode;
            std::string courseDescription;
            std::string courseInstructor;
            std::string courseSchedule;
            std::string startDate;
            std::string endDate;
            std::string time;
            std::string courseLocation;
            int courseCredits;
            int courseCapacity;
            std::vector<std::string> prerequisites;
            std::vector<std::string> corequisites;
            std::vector<int> enrolledStudents;
        
        public:
            // Constructor
            Courses() = default;
            
            // Constructor with parameters
            Courses(const std::string &courseName,
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
                const std::vector<std::string> &corequisites);

            // Update course information
            // This function allows you to update the course information using a CourseUpdate object.
            // It takes a CourseUpdate object as a parameter and updates the course information accordingly.
            void updateCourse(const CourseUpdate &courseUpdate);

            // Enrollment methods
            bool addStudent(int studentId);
            bool removeStudent(int studentId);
            const std::vector<int> &getEnrolledStudents() const;

            // Getters for course information
            std::string getCourseName() const;
            std::string getCourseCode() const;
            std::string getCourseDescription() const;
            std::string getCourseInstructor() const;
            std::string getCourseSchedule() const;
            std::string getStartDate() const;
            std::string getEndDate() const;
            std::string getTime() const;
            std::string getCourseLocation() const;
            int getCourseCredits() const;
            int getCourseCapacity() const;
            const std::vector<std::string>& getPrerequisites() const;
            const std::vector<std::string>& getCorequisites() const;
        };
}




#endif //ENROLLEASE_COURSES_H
