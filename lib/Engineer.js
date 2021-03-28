const  Employee = require('./Employee');

class Engineer extends Employee {
    constructor(gitHub) {
        super();
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;