function managerPrompt() {
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

  inquirer.prompt(managerQuestions).then(function (answers) {
    let newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    newTeamMembers.push(newManager);
    console.log(newManager);
  });
}

module.exports = managerPrompt();
