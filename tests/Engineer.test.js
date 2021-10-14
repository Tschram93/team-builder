const Engineer = require('../library/Engineer')

// engineer test
//  Create
test('create engineer', () => {
    const engineer = new Engineer('Travis', 28, `TSchram93@gmail.com`);

    expect(engineer.github).toEqual(expect.any(String));
});

//  Github
test('engineer github', () => {
    const engineer = new Engineer('Travis', 28, `Tschram93`);

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('engineer role', () => {
    const engineer = new Engineer('Travis', 28, `Tschram93`);

    expect(engineer.jobSelection()).toEqual("Engineer");
});