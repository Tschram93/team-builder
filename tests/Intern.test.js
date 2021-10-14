const Intern = require('../library/Intern')


test('create intern', () => {
    const intern = new Intern('Travis', 28, 'TSchram93@yaho.com', 'Michigan State University');

    expect(intern.school).toEqual(expect.any(String));
});


test('school', () => {
    const intern = new Intern('Travis', 28, 'TSchram93@yaho.com', 'Michigan State University');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('intern role', () => {
    const intern = new Intern('Travis', 28, 'TSchram93@yaho.com');

    expect(intern.jobSelection()).toEqual("Intern");
});