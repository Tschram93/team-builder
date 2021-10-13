class Employee {
    //Make constructor with
    constructor(name, id, email) {
        // Name
        this.name = name;
        //Email
        this.id = id;
        //Id
        this.email = email;
    }
}
nameRequest() {
    return this.name
}
idRequest() {
    return this.id
}
emailRequest() {
    return this.email
}
jobSelection() {
    return "employee"
}



module.exports = Employee;