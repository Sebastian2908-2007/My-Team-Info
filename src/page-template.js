//const Engineer = require("../lib/Engineer");

 const managerGen = (name, employId,officeNum,eMail) => {
    
  /*return `
     ${teamArr
    //.filter(({officeNum}) => officeNum)
     .map(({name,employId,eMail,officeNum}) => {
       return `
       <div class="row row-cols-1 row-cols-md-2 g-4">
       <div class="col">
         <div class="card">
       <div class="card-body">
       <h2 class="card-title">Manager</h2>
         <h5 class="card-title">${name}</h5>
       <p class="card-text">Id:${employId}</p>
       <p class="card-text">Office Number:${officeNum}</p> 
       <a class="card-text" href="mailto:piotr@mailtrap.io, ${eMail}">
       Email:
       </a>
       </div>
     </div>
   </div>
     `})
    }
     
`;*/
return `
<div class="row row-cols-1 row-cols-md-2 g-4">
<div class="col">
  <div class="card">
<div class="card-body">
<h2 class="card-title">Manager</h2>
  <h5 class="card-title">${name}</h5>
<p class="card-text">Id:${employId}</p>
<p class="card-text">Office Number:${officeNum}</p> 
<a class="card-text" href="mailto:piotr@mailtrap.io, ${eMail}">
Email:
</a>
</div>
</div>
</div>
`
}; 
 
 const internGen = teamArr => {
  return `
  ${teamArr
 .filter(({school}) => school)
  .map(({name,employId,eMail,school}) => {
    return `
    <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card">
    <div class="card-body">
    <h2 class="card-title">Intern</h2>
      <h5 class="card-title">${name}</h5>
    <p class="card-text">Id:${employId}</p>
    <p class="card-text">School:${school}</p> 
    <a class="card-text" href="mailto:piotr@mailtrap.io, ${eMail}">
    Email:
    </a>
    </div>
  </div>
</div>
  `})
 }
  
`;
 
};

const engineerGen = teamArr => {
  return `
  ${teamArr
 .filter(({gitHub}) => gitHub)
  .map(({name,employId,eMail,gitHub}) => {
    return `
    <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col">
      <div class="card">
    <div class="card-body">
    <h2 class="card-title">Engineer</h2>
      <h5 class="card-title">${name}</h5>
    <p class="card-text">Id:${employId}</p>
    <a class="card-text" href=" https://github.com/${gitHub}">
    GitHub:
    </a>
    <a class="card-text" href="mailto:piotr@mailtrap.io, ${eMail}">
    Email:
    </a>
    </div>
  </div>
</div>
  `})
 }
  
`;
 

};

 module.exports = employeesArr => {

const [{name,employId,eMail,officeNum},

] = employeesArr;

//const [{name,employId,eMail,gitHub}] = engineer;

//const [{name,employId,eMail,school}] = intern;



  return `
    
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>MY Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>
  <main>
  <header>My Team</header>
    <body>
  <div>
  ${managerGen(name,employId,eMail,officeNum)}
 
  
  </div>
    </body>
    </main>
    </html>
    `;
};



/*${internGen(name, employId,eMail,school)}
  ${engineerGen(name,employId,eMail,gitHub)}*/