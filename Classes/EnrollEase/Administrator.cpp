//
// Created by eudora on 4/14/25.
//

#include "Administrator.h"
#include "Courses.h"
#include <iostream>
using namespace std;

namespace EnrollEase {
    Administrator::Administrator(string id, const string& fn, const string& ln,
                                 const string& un, const string& e,
                                 const string& p, const string& aID)
        : User(id, fn, ln, un, e, p), adminID(aID) {}

    void Administrator::manageCourses(Action action, vector<Courses>& courses) {
        for (Courses& course : courses) {
            string code = course.getCourseCode();

            switch (action) {
                case Action::ADD:
                    managedCourses[code] = course;
                    cout << "[ADMIN] Course \"" << code << "\" added.\n";
                    break;
                case Action::REMOVE:
                    if (managedCourses.erase(code)) {
                        cout << "[ADMIN] Course \"" << code << "\" removed.\n";
                    } else {
                        cout << "[ADMIN] Course \"" << code << "\" not found.\n";
                    }
                    break;
                case Action::UPDATE:
                    if (managedCourses.find(code) != managedCourses.end()) {
                        managedCourses[code] = course;
                        cout << "[ADMIN] Course \"" << code << "\" updated.\n";
                    } else {
                        cout << "[ADMIN] Cannot update. Course \"" << code << "\" not found.\n";
                    }
                    break;
            }
        }
    }

    void Administrator::manageUsers(Action action, vector<User*>& users) {
        for (User* user : users) {
            string email = user->getEmail();

            switch (action) {
                case Action::ADD:
                    userAccounts[email] = user;
                    cout << "[ADMIN] User " << email << " added.\n";
                    break;
                case Action::REMOVE:
                    if (userAccounts.erase(email)) {
                        cout << "[ADMIN] User " << email << " removed.\n";
                    } else {
                        cout << "[ADMIN] User " << email << " not found.\n";
                    }
                    break;
                case Action::UPDATE:
                    if (userAccounts.find(email) != userAccounts.end()) {
                        userAccounts[email] = user;
                        cout << "[ADMIN] User " << email << " updated.\n";
                    } else {
                        cout << "[ADMIN] Cannot update. User " << email << " not found.\n";
                    }
                    break;
            }
        }
    }

    void Administrator::setRegistrationDeadline(const string& deadline) {
        registrationDeadline = deadline;
        cout << "[ADMIN] Registration deadline set to " << deadline << endl;
    }

    void Administrator::monitorSystemStatus() const {
        cout << "[ADMIN] System is online. Monitoring status...\n";
        cout << "[ADMIN] Total managed courses: " << managedCourses.size() << endl;
        cout << "[ADMIN] Total user accounts: " << userAccounts.size() << endl;
        cout << "[ADMIN] Current deadline: " << registrationDeadline << endl;
    }

    string Administrator::getUserDetails(const string& userID) const {
        for (const auto& pair : userAccounts) {
            if (pair.second->getUserID() == userID) {
                return pair.second->getName() + " - " + pair.second->getRole();
            }
        }
        return "[ADMIN] User not found.";
    }

    string Administrator::getRole() const {
        return "Administrator";
    }
}