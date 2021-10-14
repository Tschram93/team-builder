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
getName() {
    return this.name;
}
getID() {
    return this.id;
}
getEmail() {
    return this.email;
}
jobSelection() {
    return "Employee";
}



module.exports = Employee;