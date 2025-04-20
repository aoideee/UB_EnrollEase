//
// Created by eudora on 4/14/25.
//

#include "Authentication.h"
#include <iostream>
#include <string>

using namespace std;

namespace EnrollEase {
    bool Authentication::login(const std::string &email, const std::string &password, const std::vector<User> &users) {
        for (const User &user : users) {
            if (user.email == email && user.password == password) {
                cout << "[AUTH] Login successful for " << user.getName() << " (" << user.getRole() << ")" << endl;
                return true;
            }
        }
        cout << "[AUTH] Login failed: Invalid credentials." << endl;
        return false;
    }

    bool Authentication::logout(int userId) {
        cout << "[AUTH] User with ID " << userId << " logged out successfully." << endl;
        return true;
    }

    bool Authentication::registerUser(std::vector<User> &users, string id, const string &firstName, const string &lastName, const string &username, const string &email, const string &password, const string &role) {
        for (const User &user : users) {
            if (user.email == email) {
                cout << "[AUTH] Registration failed: Email already in use." << endl;
                return false;
            }
        }

        User newUser(id, firstName, lastName, username, email, password);
        users.push_back(newUser);

        cout << "[AUTH] User registered successfully with role: "<< role << endl;
        return true;
    }
}