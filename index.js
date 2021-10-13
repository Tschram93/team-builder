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

const teamEmployees = {
    //  Set up inquirer questions 
    Manager: [{
            //  What is the employee name
            message: 'What is the name of the manager?',
            type: 'input',
            name: "nameManager"
        },
        {
            // What is the employee id #?
            message: `What is this employee's id number?`,
            type: 'input',
            name: 'idManager'
        },
        {
            // What is this employee's email?
            message: `What is Email address for the manager?`,
            type: 'input',
            name: 'emailManager'
        },
        {
            // Office number
            message: `What is the manager's office number?`,
            type: 'input',
            name: 'officeNumber'
        }
    ],

    Engineer: [{
            message: `What is this engineer's name?`,
            type: 'input',
            name: 'nameEngineer'
        },
        {
            message: `What is this employee's id number?`,
            type: 'input',
            name: 'idEngineer'
        },
        {
            message: `What is Email address for the engineer?`,
            type: 'input',
            name: 'emailEngineer'
        },
        {
            message: `What is the github profile username of this engineer?`,
            type: 'input',
            name: 'githubEngineer'
        }
    ],
    Intern: [{
            message: `What is this intern's name?`,
            type: 'input',
            name: 'nameIntern'
        },
        {
            message: `What is this employee's id number?`,
            type: 'input',
            name: 'idIntern'
        },
        {
            message: `What is Email address for the intern?`,
            type: 'input',
            name: 'emailIntern'
        },
        {
            message: `What school or university did this intern attend?`,
            type: 'input',
            name: 'schoolIntern'
        }
    ]
}


//  Starting the app

function start() {
    inquirer.prompt(addEmployee).then((answer) => {
        if (answer.addToRoster === 'yes') {
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

// = render


// TODO: What is this employee's Github profile link?


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