const Employee = require('./Employee');
class Manager   {
    constructor (name,employId,eMail,officeNum) {
        this.name = name;
        this.employId = employId;
        this.eMail = eMail;
        this.officeNum = officeNum;
    }

}

module.exports = Manager;