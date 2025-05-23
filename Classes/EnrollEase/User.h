//
// Created by eudora on 4/14/25.
//

#ifndef ENROLLEASE_USER_H
#define ENROLLEASE_USER_H

#include <string>

namespace EnrollEase {
    class User {
    private:
        std::string password;

    protected:
        std::string userID;
        std::string firstName;
        std::string lastName;
        std::string username;
        std::string email;

    public:
        // Constructor and Destructor
        User(std::string id, const std::string &firstName, const std::string &lastName, const std::string &username, const std::string &email, const std::string &password);

        virtual ~User();

        // Getters
        std::string getUserID() const;
        std::string getFirstName() const;
        std::string getLastName() const;
        std::string getUsername() const;
        std::string getName() const;
        std::string getEmail() const;

        virtual std::string getRole() const; // Pure virtual function for role

        friend class Authentication; // Allow Authentication class to access private members


    };
}




#endif //ENROLLEASE_USER_H
