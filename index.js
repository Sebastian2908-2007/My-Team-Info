const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const {writeFile} = require('./utils/generate-page');
const generatePage = require('./src/page-template')
const inquirer = require("inquirer");
const fs = require('fs');
const myTeam = [];
 
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
     // myTeam.push(manager);
      //console.log(myTeam);
     // initTeam();
      })
      .then(data => {
        return  generatePage(data);
      })
      .then(page => {
         return writeFile(page);
      })
      .then(writeFileResponse => {
      console.log(writeFileResponse);
      })
      
      
}

/*const initTeam = function () {
  return  inquirer.prompt({ 
type: 'list',
name: 'empType',
message: 'would you like to add an Engineer or Intern?',
choices: ['engineer','intern']
    }).then(({empType}) => {
        if (empType === 'intern') {
           // console.log('a');
           internPrompt();
        } if (empType === 'engineer') {
           // console.log('b')
           engineerPrompt();
        }
    })
}
 

 const engineerPrompt = function () {
  let engineer;
  return inquirer.prompt([
    {
        type: "text",
        name: 'name',
        message: 'What is the engineers  name?'
  },
  {
   type: 'text',
   name: 'employId',
   message: 'What is the engineers employee ID?'   
  },
  {
      type: "text",
      name: 'eMail',
      message: 'what the engineers email adress?'
  },
  {
   type: 'text',
   name: 'gitHub',
   message: 'what is the engineers github profile?'
  }
  ])
  .then(({name, employId,eMail,gitHub}) => {
     engineer = new Engineer(name, employId,eMail,gitHub);
     myTeam.push(engineer);
     console.log(myTeam);
     anotherMember();
  })
  
 }; 

 const internPrompt = function () {
     let intern;
    return inquirer.prompt([
        {
            type: "text",
            name: 'name',
            message: 'What is the interns  name?'
      },
      {
       type: 'text',
       name: 'employId',
       message: 'What is the interns employee ID?'   
      },
      {
          type: "text",
          name: 'eMail',
          message: 'what the interns email adress?'
      },
      {
       type: 'text',
       name: 'school',
       message: 'what is the school?'
      }
      ])
      .then(({name, employId,eMail,school}) => {
         intern = new Intern(name, employId,eMail,school);
         myTeam.push(intern);
         console.log(myTeam);
         anotherMember()
      }); 
 };

  const anotherMember = function () {
    inquirer.prompt({
        type: 'confirm',
        name: 'another',
        message: 'would you like to add another team member?',
    })
      .then(({another}) => {
        if (another === true) {
             return initTeam();
        }else {
            console.log(myTeam);
            return false;
            
            
        }
    })

  };*/
 initManager();
 
 