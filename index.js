//  CLASSES
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// DEPENDENCIES
const inquirer = require('inquirer');
const jest = require(`jest`);
const path = require('path');
const fs = require('fs');


// TEAM variable
let team = [];

// PATH
const outputDir = path.resolve(__dirname, 'output');
const outputPath = path.join(outputDir, 'index.html');

// Set a way to render app into html

const managerQuestions = () => {
    return inquirer.prompt([
            //  Set up inquirer questions 
            {
                //  What is the employee name
                message: 'What is the name of the manager?',
                type: 'input',
                name: "name"
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
            const manager = new Manager(name, id, email, officeNumber);
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
                message: `What is this employee's name??`,
                type: 'input',
                name: 'name'
            },
            {
                message: `What is this employee's id number?`,
                type: 'input',
                name: 'id'
            },
            {
                message: `What is Email address for the engineer?`,
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
            let {
                name,
                id,
                email,
                role,
                github,
                school,
                addToRoster
            } = jobData

            let staff;
            if (role === 'Intern') {
                staff = new Intern(name, id, email, school);
            } else if (role = 'Engineer') {
                staff = new Engineer(name, id, email, github);
            }
            team.push(staff);

            if (addToRoster) {
                return staffQuestions(team);
            } else {
                return team;
            }
        })
};


const writeFile = data => {
    fs.writeFile('.index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The Employees have been generated into an html file!")
        }
    })
};



//  Starting the app

// function start() {
//     inquirer.prompt(addEmployee).then((answer) => {
//         if (answer.addPosition === 'yes') {
//             createCard();
//         } else {
//             fs.writeFileSync(outputPath, render(team));
//             process.exit(0);
//         }
//     })
// }




// function addPosition() {
//     inquirer.prompt([{
//         message: `What is this employee's job position/title?`,
//         choices: ['Manager', 'Engineer', 'Intern'],
//         name: 'jobSelection'
//     }]).then((answer) => {
//         if (answer.jobSelection === 'Manager' && counter < 1) {
//             counter++

//             inquirer.prompt(teamEmployees.Manager).then((results) => )
//         }
//     })
// };
// = render



// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

// TODO: CREATE CARD FOR EACH EMPLOYEE

// Write out a test for errors 

// Error catch