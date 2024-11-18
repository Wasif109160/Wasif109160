#include <iostream>
#include <string>
using namespace std;

class Bio {
private:
    string name;
    string status;
    string university;
    string department;
    int semester;
    string majorCourse;
    string currentCourse;
    bool isHuman;

public:
    Bio(string n, string st, string uni, string dept, int sem, string major, string current, bool human)
        : name(n), status(st), university(uni), department(dept), semester(sem), majorCourse(major),
          currentCourse(current), isHuman(human) {}

    void displayBio() {
        cout << "Name: " << name << endl;
        cout << "Status: " << status << endl;
        cout << "University: " << university << endl;
        cout << "Department: " << department << endl;
        cout << "Current Semester: " << semester << endl;
        cout << "Finished Major Course: " << majorCourse << endl;
        cout << "Currently Studying: " << currentCourse << endl;
    }

    void showCodingSpeed() {
        if (isHuman) {
            cout << "I am a human coder, so my speed is 60." << endl;
        } else {
            cout << "I am a robot coder, so my speed is infinite!" << endl;
        }
    }
};

int main() {
    Bio wasif("Wasif", "New Coder", "AIUB", "Department of CSE", 3, "Introduction to Programming (C++)", "Java", true);

   
    cout << "=== My Bio ===" << endl;
    wasif.displayBio();
    cout << endl;

    wasif.showCodingSpeed();

    return 0;
}
