const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    RequestSchool() {
        return this.school;
    }

    jobSelection() {
        return "Intern";
    }
}

module.exports = Intern