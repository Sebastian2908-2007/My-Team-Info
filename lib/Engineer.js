const  Employee = require('./Employee');

class  Engineer {
    constructor(eName, eEmployId,eEMail,gitHub) {
        this.eName = eName;
       this.eEmployId = eEmployId;
       this.eEMail = eEMail;
        this.gitHub = gitHub;
    }
}

module.exports = Engineer;