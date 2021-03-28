const Employee = require('./Employee');
class Manager extends Employee  {
    constructor (officeNum) {
        super();
        this.officeNum = officeNum;
    }

}

module.exports = Manager;