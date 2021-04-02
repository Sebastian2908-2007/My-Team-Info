const Employee = require('./Employee');
class Intern extends Employee {
    constructor (name, employId,eMail,school) {
        super(name, employId,eMail);
        this.school = school;
    }
    
}
module.exports = Intern;