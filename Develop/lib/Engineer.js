// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, githubUser) {
        //copies parent constructor function
        super(name, id, email, this.githubUser);
        this.githubUser = githubUser;
    }

    getGithubUser() {
        return this.githubUser;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;