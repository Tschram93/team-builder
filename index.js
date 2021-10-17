//  CLASSES
const Manager = require('./library/Manager');
const Engineer = require('./library/Engineer');
const Intern = require('./library/Intern');
const templatejs = require('./src/template.js')

// DEPENDENCIES
const inquirer = require('inquirer');
// const jest = require(`jest`);
// const path = require('path');
const fs = require('fs');

//Link html template
const template = require('./src/template.js');

// TEAM variable
let team = [];



// PATH
// const outputDir = path.resolve(__dirname, 'output');
// const outputPath = path.join(outputDir, './src/template.js');

// Set a way to render app into html

const managerQuestions = () => {
    return inquirer.prompt([
            //  Set up inquirer questions 
            {
                //  What is the employee name
                message: 'What is the name of the manager?',
                type: 'input',
                name: "name",
                validate: (value) => {
                    if (value) {
                        return true
                    } else {
                        return 'REQUIRED. Must input text to continue.'
                    }
                }
            }, {
                // What is the employee id #?
                message: `What is this employee's id number?`,
                type: 'input',
                name: 'id'
            }, {
                // What is this employee's email?
                message: `What is Email address for the manager?`,
                type: 'input',
                name: 'email'
            }, {
                // Office number
                message: `What is the manager's office number?`,
                type: 'input',
                name: 'officeNumber'
            }
        ])
        .then(managerQuestions => {
            const {
                name,
                id,
                email,
                officeNumber
            } = managerQuestions;
            let manager = new Manager(name, id, email, officeNumber);
            // STRINGIFY
            const change = JSON.stringify(manager)
            change
            team.push(manager)
            console.log(manager)
        })
};

// Same but now with employees instead of manager
const staffQuestions = () => {
    return inquirer.prompt([{
                message: `Select the employee's job position.`,
                type: 'list',
                choices: ['Engineer', 'Intern'],
                name: 'role'
            },
            {
                message: `What is this employee's name?`,
                type: 'input',
                name: 'name',
                validate: (value) => {
                    if (value) {
                        return true
                    } else {
                        return 'REQUIRED. Must input text to continue.'
                    }
                }
            },
            {
                message: `What is this employee's id number?`,
                type: 'input',
                name: 'id'
            },
            {
                message: `What is Email address for this employee?`,
                type: 'input',
                name: 'email'
            },
            {
                message: `What is the github profile username of this engineer?`,
                type: 'input',
                name: 'github',
                when: (input) => input.role == "Engineer"
            },
            {
                message: `What school did the intern attend?`,
                type: 'input',
                name: 'school',
                when: (input) => input.role == "Intern"
            },
            {
                message: `Add additional employee to roster?`,
                choices: ['yes', 'no'],
                type: 'list',
                name: 'addToRoster'
            }
        ])
        .then(jobData => {
            // STRINGIFY
            const myJSON = JSON.stringify(jobData);
            let {
                name,
                id,
                email,
                role,
                github,
                school,
                addToRoster
            } = jobData;
            myJSON
            let staff;
            if (role === 'Intern') {
                staff = new Intern(name, id, email, school);
            } else if (role = 'Engineer') {
                staff = new Engineer(name, id, email, github);
            }
            team.push(staff);

            if (addToRoster == 'yes') {
                return staffQuestions(team);
            } else {
                return team;
            }
        })
};


// Error catch
// const dataString = (data) => {
//     let stringJson = JSON.stringify(data);
//     const writeFile = data => {
//         fs.writeFile('./dist/index.html', data, err => {
//             if (err) {
//                 console.log(err);
//                 return;
//             } else {
//                 console.log("The Employee information has been used to make an html file!")
//             }
//         })
//     }
//     if (data == data) {
//         stringJson
//     }
// }

// function runPLEASE(datastring) {
//     datastring
// }


// STRINGIFY
const writeFile = data => {
    console.log(data);
    if (data == data) {
        const stringJSON = JSON.stringify(data);

        stringJSON
    }
    console.log(data);
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The Employee information has been used to make an html file!")
        }
    })
}

managerQuestions()
    .then(staffQuestions)
    .then(team => {
        return template(team);
    })
    .then(webPage => {
        return writeFile(webPage);
    })
    // add error catch
    .catch(err => {
        console.log(err);
    });