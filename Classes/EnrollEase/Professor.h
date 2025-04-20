//
// Created by eudora on 4/14/25.
//

#ifndef ENROLLEASE_PROFESSOR_H
#define ENROLLEASE_PROFESSOR_H

#include "User.h"
#include <vector>
#include <string>

namespace EnrollEase {
   class Professor : public User{
   private:
      std::string facultyID;
       std::vector<std::string> assignedCourses;

   public:
       // Constructor
       Professor(std::string id, const std::string& fn, const std::string& ln,
          const std::string& un, const std::string& e,
          const std::string& p, std::string facultyID);

       // Professor specific methods
       void viewStudents(const std::string &courseID) const;
       void inputGrades(const std::string &courseID, const std::string &studentID, char grade) const;

       // Override from User
       std::string getRole() const override;
   };
}




#endif //ENROLLEASE_PROFESSOR_H
