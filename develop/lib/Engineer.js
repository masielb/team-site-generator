// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, githubUserId) {
        super(name, id, email);
        this.role = "Engineer";
        this.github = githubUserId;
    }
  
    getGithub() {
      return this.github;
    }
  }
  
  module.exports = Engineer;