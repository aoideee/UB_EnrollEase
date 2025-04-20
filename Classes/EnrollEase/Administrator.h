//
// Created by eudora on 4/14/25.
//

#ifndef ENROLLEASE_ADMINISTRATOR_H
#define ENROLLEASE_ADMINISTRATOR_H

#include "User.h"
#include "Courses.h"
#include "Action.h"
#include <unordered_map>
#include <string>
#include <vector>

namespace EnrollEase {

    class Administrator : public User {
    private:
        std::string adminID;
        std::unordered_map<std::string, Courses> managedCourses;
        std::unordered_map<std::string, User*> userAccounts;
        std::string registrationDeadline;

    public:
        // Constructor
        Administrator(std::string id, const std::string& fn, const std::string& ln,
                      const std::string& un, const std::string& e,
                      const std::string& p, const std::string& adminID);

        // Courses management
        void manageCourses(Action action, std::vector<Courses>& courses);

        // User management
        void manageUsers(Action action, std::vector<User*>& users);

        // System settings
        void setRegistrationDeadline(const std::string& deadline);
        void monitorSystemStatus() const;

        // Info retrieval
        std::string getUserDetails(const std::string& userID) const;

        // Role
        std::string getRole() const override;
    };

} // namespace EnrollEase

#endif // ENROLLEASE_ADMINISTRATOR_H

