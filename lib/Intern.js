const Employee = require('./Employee');
class Intern {
    constructor (iName, iEmployId,iEMail,school) {
        this.iName = iName;
        this.iEmployId = iEmployId;
        this.iEMail = iEMail;
        this.school =school;
    }
    
}
module.exports = Intern;