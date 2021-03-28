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
      ])
      .then(({name,employId,eMail,officeNum}) => {
      manager = new Manager(name, employId)
      console.log(manager);
      });
}
  initManager();