//
// Created by eudora on 4/14/25.
//

#ifndef ENROLLEASE_ACTION_H
#define ENROLLEASE_ACTION_H

#include <string>

// This header file defines an enum class for different actions
namespace EnrollEase {
    enum class Action {
    ADD,
    REMOVE,
    UPDATE
    };

    // Converts an Action enum to a string
    std::string actionToString(const Action& action);
}




#endif //ENROLLEASE_ACTION_H
