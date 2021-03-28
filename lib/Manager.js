const Employee = require('./Employee');
class Manager extends Employee  {
    constructor (name,employeeId,eMail,officeNum) {
        super(name,employeeId,eMail);
        this.officeNum = officeNum;
    }

}

module.exports = Manager;