//
// Created by eudora on 4/14/25.
//

#ifndef ENROLLEASE_DEPARTMENT_H
#define ENROLLEASE_DEPARTMENT_H

#include <string>
#include <vector>

namespace EnrollEase {

    class Department {
    private:
        std::string departmentName;
        std::vector<std::string> courseIDs;
        std::vector<int> facultyIDs;

    public:
        // Constructor
        Department(const std::string& name);

        // Methods
        void addCourse(const std::string& courseID);
        void addFaculty(int facultyID);

        // Getters
        std::vector<std::string> getCourses() const;
        std::vector<int> getFaculty() const;
    };

}



#endif //ENROLLEASE_DEPARTMENT_H
