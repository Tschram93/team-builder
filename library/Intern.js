const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school)
    super(name, id, email, school) {
        this.id = id
        this.school = school

    }


    jobSelection() {
        return "Intern"
    }

    requestSchool() {
        return this.schoolIntern
    }
}

module.exports = Intern