const  Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, employId,eMail,gitHub) {
        super(name, employId,eMail);
        this.gitHub = gitHub;
    }
}

module.exports = Engineer, Employee;