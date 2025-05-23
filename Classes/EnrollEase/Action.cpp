//
// Created by eudora on 4/14/25.
//

#include "Action.h"

#include <string>
#include <iostream>
using namespace std;

namespace EnrollEase {
    // This function converts an Action enum to a string
    string actionToString(const Action& action) {
        switch (action) {
            case Action::ADD:
                return "ADD";
            case Action::REMOVE:
                return "REMOVE";
            case Action::UPDATE:
                return "UPDATE";
            default:
                return "UNKNOWN ACTION";
        }
    }
}