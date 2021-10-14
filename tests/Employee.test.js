const Employee = require('../lib/Employee');

test('create object', () => {
    const employee = new Employee('Travis', 28, `TSchram93@gmail.com`);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});