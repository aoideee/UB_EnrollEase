#ifndef ENROLLEASE_COURSEOFFERING_H
#define ENROLLEASE_COURSEOFFERING_H

#include <string>

namespace EnrollEase {

    class CourseOffering {
    private:
        int         offeringID;
        std::string courseID;    // FK to Course
        int         semesterID;  // FK to Semester
        std::string instructor;
        std::string schedule;

    public:
        // Constructor
        CourseOffering(int offeringID,
                       const std::string& courseID,
                       int semesterID,
                       const std::string& instructor,
                       const std::string& schedule);

        // Getters
        int         getOfferingID() const;
        std::string getCourseID() const;
        int         getSemesterID() const;
        std::string getInstructor() const;
        std::string getSchedule() const;

        // Setters
        void setInstructor(const std::string& instructor);
        void setSchedule(const std::string& schedule);
    };

}

#endif // ENROLLEASE_COURSEOFFERING_H
