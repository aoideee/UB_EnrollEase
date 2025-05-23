//
// Created by eudora on 4/14/25.
//

#include "User.h"
using namespace std;

namespace EnrollEase {
    User::User(string id, const string &firstName, const string &lastName, const string &username, const string &email, const string &password)
        : userID(id), firstName(firstName), lastName(lastName), username(username), email(email), password(password) {}

    User::~User() {}

    string User::getUserID() const {
        return userID;
    }

    string User::getFirstName() const {
        return firstName;
    }

    string User::getLastName() const {
        return lastName;
    }

    string User::getUsername() const {
        return username;
    }

    string User::getName() const {
        return firstName + " " + lastName;
    }

    string User::getEmail() const {
        return email;
    }

    string User::getRole() const {
        return "User";
    }
}