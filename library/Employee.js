//  Assign Employee Class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    nameRequest() {
        return this.name;
    }

    idRequest() {
        return this.id;
    }

    emailRequest() {
        return this.email;
    }

    jobSelection() {
        return 'Employee';
    }
};

// to be exported 
module.exports = Employee;