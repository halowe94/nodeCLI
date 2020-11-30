const Engineer = require("./lib/Engineer");
const inquirer = require("inquirer");

function engineerPrompt() {
  const engineerQuestions = [
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's id?",
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

  inquirer.prompt(engineerQuestions).then(function (engAnswers) {
    let newEngineer = new Engineer(
      engAnswers.name,
      engAnswers.id,
      engAnswers.email,
      engAnswers.github
    );
    newTeamMembers.push(newEngineer);
    console.log(newEngineer);
  });
}

module.exports = engineerPrompt();
