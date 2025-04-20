# Minimum CMake version required
cmake_minimum_required(VERSION 3.28)

# Project name
project(EnrollEase)

# Use C++14 standard
set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Include headers from EnrollEase directory
include_directories(EnrollEase)

# Automatically find all .cpp and .h files inside EnrollEase/
file(GLOB_RECURSE SOURCES "EnrollEase/*.cpp")
file(GLOB_RECURSE HEADERS "EnrollEase/*.h")

# Add the main file explicitly if it's outside the EnrollEase folder
set(MAIN_FILE "main.cpp")

# Create executable target
add_executable(EnrollEase ${MAIN_FILE} ${SOURCES} ${HEADERS})

# (Optional) Show all files in IDE
source_group(TREE ${CMAKE_CURRENT_SOURCE_DIR}/EnrollEase PREFIX "Source Files" FILES ${SOURCES})
source_group(TREE ${CMAKE_CURRENT_SOURCE_DIR}/EnrollEase PREFIX "Header Files" FILES ${HEADERS})