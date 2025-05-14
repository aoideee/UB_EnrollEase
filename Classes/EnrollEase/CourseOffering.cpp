#include "CourseOffering.h"

namespace EnrollEase {

    CourseOffering::CourseOffering(int offeringID,
                                   const std::string& courseID,
                                   int semesterID,
                                   const std::string& instructor,
                                   const std::string& schedule)
      : offeringID(offeringID),
        courseID(courseID),
        semesterID(semesterID),
        instructor(instructor),
        schedule(schedule)
    {}

    int CourseOffering::getOfferingID() const {
        return offeringID;
    }

    std::string CourseOffering::getCourseID() const {
        return courseID;
    }

    int CourseOffering::getSemesterID() const {
        return semesterID;
    }

    std::string CourseOffering::getInstructor() const {
        return instructor;
    }

    std::string CourseOffering::getSchedule() const {
        return schedule;
    }

    void CourseOffering::setInstructor(const std::string& instr) {
        instructor = instr;
    }

    void CourseOffering::setSchedule(const std::string& sched) {
        schedule = sched;
    }

}
