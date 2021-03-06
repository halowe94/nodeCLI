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

const startQ = [
  {
    type: "list",
    name: "begin",
    message: "Would you like to create a new team?",
    choices: ["yes", "no"],
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the manager's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the manager's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the manager's email?",
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
  },
  {
    type: "list",
    name: "role",
    message: "Would you like to add an Engineer or an Intern?",
    choices: ["Engineer", "Intern"],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "id",
    message: "What is the engineer's id?",
  },
  {
    type: "input",
    name: "name",
    message: "What is the engineer's name?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the engineer's email?",
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's github username?",
  },
  {
    type: "list",
    name: "anotherEmployee",
    message: "Would you like to add another employee?",
    choices: ["yes", "no"],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is the intern's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is the intern's id?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the intern's email?",
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school?",
  },
  {
    type: "list",
    name: "anotherEmployee",
    message: "Would you like to add another employee?",
    choices: ["yes", "no"],
  },
];

let addEmployeeQ = [
  {
    type: "list",
    name: "role",
    message: "Would you like to add an engineer or and intern?",
    choices: ["Engineer", "Intern"],
  },
];

function init() {
  inquirer.prompt(startQ).then(function (startAnswer) {
    if (startAnswer.begin === "no") {
      console.log("end application");
    } else {
      inquirer.prompt(managerQuestions).then(function (answers) {
        let newManager = new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        );
        newTeamMembers.push(newManager);
        console.log(newManager);

        switch (answers.role) {
          case "Engineer":
            engineerPrompt();
            break;
          case "Intern":
            internPrompt();
            break;
        }
      });
    }
  });
}

init();

function engineerPrompt() {
  inquirer.prompt(engineerQuestions).then(function (engAnswers) {
    let newEngineer = new Engineer(
      engAnswers.name,
      engAnswers.id,
      engAnswers.email,
      engAnswers.github
    );
    newTeamMembers.push(newEngineer);
    console.log(newEngineer);
    if (engAnswers.anotherEmployee === "yes") {
      inquirer.prompt(addEmployeeQ).then(function (addEmployeeA) {
        if (addEmployeeA.role === "Engineer") {
          engineerPrompt();
        } else {
          internPrompt();
        }
      });
    } else {
      buildTeam(newTeamMembers);
    }
  });
}

function internPrompt() {
  inquirer.prompt(internQuestions).then(function (intAnswers) {
    let newIntern = new Intern(
      intAnswers.name,
      intAnswers.id,
      intAnswers.email,
      intAnswers.school
    );
    newTeamMembers.push(newIntern);
    console.log(newIntern);
    if (intAnswers.anotherEmployee === "no") {
      buildTeam(newTeamMembers);
      console.log("end application");
    } else {
      inquirer.prompt(addEmployeeQ).then(function (addEmployeeA) {
        if (addEmployeeA.role === "Engineer") {
          engineerPrompt();
        } else {
          internPrompt();
        }
      });
    }
  });
}

// .then(function () {
//     inquirer.prompt(addEmployeeQ);

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

let newTeamMembers = [];

function buildTeam() {
  fs.writeFile("./index.html", render(newTeamMembers), "utf8", function (err) {
    if (err) {
      throw err;
    }
    console.log("Finished writing file");
  });
}
