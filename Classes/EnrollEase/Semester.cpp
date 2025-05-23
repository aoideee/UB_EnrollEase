#include "Semester.h"

namespace EnrollEase {

    Semester::Semester(int id,
                       const std::string& name,
                       const std::string& startDate,
                       const std::string& endDate)
      : id(id),
        name(name),
        startDate(startDate),
        endDate(endDate)
    {}

    int Semester::getId() const {
        return id;
    }

    std::string Semester::getName() const {
        return name;
    }

    std::string Semester::getStartDate() const {
        return startDate;
    }

    std::string Semester::getEndDate() const {
        return endDate;
    }

    void Semester::setName(const std::string& n) {
        name = n;
    }

    void Semester::setStartDate(const std::string& sd) {
        startDate = sd;
    }

    void Semester::setEndDate(const std::string& ed) {
        endDate = ed;
    }

}
