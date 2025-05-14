#ifndef ENROLLEASE_SEMESTER_H
#define ENROLLEASE_SEMESTER_H

#include <string>

namespace EnrollEase {

    class Semester {
    private:
        int         id;
        std::string name;       // e.g. "Spring 2025"
        std::string startDate;  // ISO "YYYY-MM-DD"
        std::string endDate;    // ISO "YYYY-MM-DD"

    public:
        // Constructor
        Semester(int id,
                 const std::string& name,
                 const std::string& startDate,
                 const std::string& endDate);

        // Getters
        int         getId() const;
        std::string getName() const;
        std::string getStartDate() const;
        std::string getEndDate() const;

        // Setters
        void setName(const std::string& name);
        void setStartDate(const std::string& startDate);
        void setEndDate(const std::string& endDate);
    };

}

#endif // ENROLLEASE_SEMESTER_H
