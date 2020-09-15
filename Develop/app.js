const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employeeQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the employee's id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the employee's email?"
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Engineer", "Intern", "Manager"]
    }
];

const engineerQuestions = [

    {
        type: "input",
        name: "github",
        message: "What is the employee's github username?"
    }
];

const internQuestions = [

    {
        type: "input",
        name: "school",
        message: "What is the employee's school?"
    }
];

const managerQuestions = [

    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    }
];

const addEmployee = [
    {
        type: "list",
        name: "anotherEmployee",
        message: "Would you like to add another employee?",
        choices: ['yes', 'no']
    }
]

function init() {
    inquirer.prompt(employeeQuestions) 
        .then(function (answers) {
           
            switch (answers.role) {
                case "Engineer":
                    inquirer.prompt(engineerQuestions)
                    .then(function (engAnswers) {
                        let newEngineer = new Engineer(answers.name, answers.id, answers.email, engAnswers.github);
                        newEngineersArray.push(newEngineer);
                        console.log(newEngineer);
                    });
                    break;
                case "Manager":
                    inquirer.prompt(managerQuestions)
                    .then(function (manAnswers) {
                        let newManager = new Engineer(answers.name, answers.id, answers.email, manAnswers.officeNumber);
                        newManagersArray.push(newManager);
                        console.log(newEngineer);
                    });
                    break;
                case "Intern":
                    inquirer.prompt(internQuestions)
                    break;
            };

        });
    // then(function () {
    //     inquirer.prompt(addEmployee);
    //     let continuePrompt = addEmployee.choices;

    //     if (continuePrompt === yes) {
    //         inquirer.prompt(employeeQuestions);
    //     }
    // }
};

init();




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

//use new keyword to create an instance of that person


//Initiate inquirer prompt to ask what employee type the user would like to create
//based on the selection that the user has provided from inquierer's drop down,
//we then initiate a follow up inquirer prompt specific to the questions needed to create that particular role
//Example: if mangager was selected, we ask office number in the follow up prompt
//after the user has completed the follow up questions, we create a new class-based object with the new keyword
//Example: let person = new Manager(chris, 5, 45);
//we now push the newly created employee to a storage array
//in order to create a loop, we have to ask if the user would like to create a new employee once they're done
//once all employees have been created, we invoke the render function and pass in the storage array
//render(storageArray);

let newInternsArray = [];
let newManagersArray = [];
let newEngineersArray = [];

//  let newIntern = new Intern(name, id, email, school);
//  let newManager = new Manager(name, id, email, officeNumber);


// console.log(newIntern);

// function pushArrays() {
//     if 
// }

