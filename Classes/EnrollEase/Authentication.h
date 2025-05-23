//
// Created by eudora on 4/14/25.
//

#ifndef ENROLLEASE_AUTHENTICATION_H
#define ENROLLEASE_AUTHENTICATION_H


#include <string>
#include <vector>
#include "User.h"

namespace EnrollEase {
    class Authentication {
    public:
        // Login function
        static bool login(const std::string& email, const std::string& password, const std::vector<User>& users);

        // Logout function
        static bool logout(int userId);

        // Registration function
        static bool registerUser(std::vector<User>& users, std::string id, const std::string& firstName,
                                 const std::string& lastName, const std::string& username,
                                 const std::string& email, const std::string& password, const std::string& role);
    };
}




#endif //ENROLLEASE_AUTHENTICATION_H
