const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const {writeFile, copyFile} = require('./utils/generate-page');
const inquirer = require("inquirer");
 
const initManager = () => {
    let manager;
   return inquirer
      .prompt([ 
      {
          type: "text",
          name: 'name',
          message: 'What is the team managers name?'
    },
    {
     type: 'text',
     name: 'employId',
     message: 'What is the managers employee ID?'   
    },
    {
        type: "text",
        name: 'eMail',
        message: 'what is your email adress?'
    },
    {
        type: 'text',
        name: 'officeNum',
        message: 'what is your office number?'
    }
      ])
      .then(({name,employId,eMail,officeNum}) => {
      manager = new Manager(name, employId,eMail,officeNum)
      console.log(manager);
      });
}
  initManager();