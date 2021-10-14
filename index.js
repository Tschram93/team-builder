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
var counter = 0;
const teamEmployees = {
    //  Set up inquirer questions 
    Manager: [{
            //  What is the employee name
            message: 'What is the name of the manager?',
            type: 'input',
            name: "name"
        },
        {
            // What is the employee id #?
            message: `What is this employee's id number?`,
            type: 'input',
            name: 'id'
        },
        {
            // What is this employee's email?
            message: `What is Email address for the manager?`,
            type: 'input',
            name: 'email'
        },
        {
            // Office number
            message: `What is the manager's office number?`,
            type: 'input',
            name: 'officeNumber'
        }
    ],
    Subordinates: [{
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
            message: ``,
            type: '',
            name: '',
            when: (input) => input.role == "Intern"
        }
    ]
}


//  Starting the app

function start() {
    inquirer.prompt(addEmployee).then((answer) => {
        if (answer.addPosition === 'yes') {
            createCard();
        } else {
            fs.writeFileSync(outputPath, render(team));
            process.exit(0);
        }
    })
}

const addEmployee = {
    message: `Add additional employee to roster?`,
    choices: ['yes', 'no'],
    type: 'list',
    name: 'addToRoster'
}

function addPosition() {
    inquirer.prompt([{
        message: `What is this employee's job position/title?`,
        choices: ['Manager', 'Engineer', 'Intern'],
        name: 'jobSelection'
    }]).then((answer) => {
        if (answer.jobSelection === 'Manager' && counter < 1) {
            counter++

            inquirer.prompt(teamEmployees.Manager).then((results) => )
        }
    })
};
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