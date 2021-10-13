const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    jobSelection() {
        return 'Engineer'
    }
    requestGithub() {
        return this.github
    }
}

module.exports = Engineer