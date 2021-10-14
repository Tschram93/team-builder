const Manager = require('../library/Manager')


test('create manager', () => {
    const manager = new Manager('Travis', 28, 'Tschram93@gmail.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('manager role', () => {
    const manager = new Manager('Travis', 28, 'Tschram93@gmail.com');

    expect(manager.jobSelection()).toEqual("Manager");
});