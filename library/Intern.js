const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school)
    super(name, id, email, school) {
        this.idIntern = id
        this.schoolIntern = school
        this.nameIntern = name
        this.emailIntern = email
    }


    jobSelection() {
        return "Intern"
    }

    requestSchool() {
        return this.schoolIntern
    }
}

module.exports = Intern