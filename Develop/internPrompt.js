const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

function internPrompt() {
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
  ];

  inquirer.prompt(internQuestions).then(function (intAnswers) {
    let newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      intAnswers.school
    );
    newTeamMembers.push(newIntern);
    console.log(newIntern);
  });
}

module.exports = internPrompt();
