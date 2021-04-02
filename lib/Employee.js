const inquirer = require('inquirer');
const Manager =require

class Employee {
    constructor(name , employId, eMail) {
       this.name = name;
       this.employId = employId;
       this.eMail = eMail;
    }
    getName() {
       inquirer.prompt({
        
            type: "text",
            name: 'name',
            message: 'What is the team managers name?'
      })
      
    }

    getId () {
        inquirer.prompt({ 
            
                type: 'text',
                name: 'employId',
                message: 'What is the managers employee ID?'   
               
            })
          
    }
    
    getEmail() {
     inquirer.prompt({ 
        type: "text",
        name: 'eMail',
        message: 'what is your email adress?'
     })
     
    }

    getRole() {

    }

    
}




























module.exports = Employee;