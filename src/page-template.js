

 const managerGen = (name, employId,officeNum,eMail) => {

return `

<div class="col">
  <div class="card container">
<div class="card-body  p-3 mb-2 bg-success text-white">
<h2 class="card-title text-dark ">Manager</h2>
  <h5 class="card-title text-dark">${name}</h5>
<p class="card-text text-dark ">Id:${employId}</p>
<p class="card-text text-dark">Office Number:${officeNum}</p> 
<a class="card-text text-dark" href="mailto:piotr@mailtrap.io, ${eMail}">
Email:${eMail}
</a>
</div>
</div>

`
}; 
 
 const internGen = (name,employId,eMail,school) => {

return `

<div class="col">
  <div class="card container">
<div class="card-body  p-3 mb-2 bg-success text-white">
<h2 class="card-title text-dark">Intern</h2>
  <h5 class="card-title text-dark">${name}</h5>
<p class="card-text text-dark">Id:${employId}</p>
<p class="card-text text-dark">School:${school}</p> 
<a class="card-text text-dark" href="mailto:piotr@mailtrap.io, ${eMail}">
Email:${eMail}
</a>
</div>
</div>

`
};

const engineerGen = (name,employId,eMail,gitHub) => {

return `

<div class="col">
  <div class="card container">
<div class="card-body p-3 mb-2 bg-success text-white">
<h2 class="card-title text-dark ">Engineer</h2>
  <h5 class="card-title text-dark">${name}</h5>
<p class="card-text text-dark">Id:${employId}</p>
<p>
<a class="card-text text-dark" href=" https://github.com/${gitHub}">
GitHub:${gitHub}
</a>
</p>
<p>
<a class="card-text text-dark" href="mailto:piotr@mailtrap.io, ${eMail}">
Email:${eMail}
</a>
</p>
</div>
</div>

`
 

};

 module.exports = employeesArr => {

const [{name,employId,eMail,officeNum},
       {eName,eEmployId,eEMail,gitHub},
       {iName,iEmployId,iEMail,school},


] = employeesArr;



//console.log(employeesArr)

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
  <div class="jumbotron p-3 mb-2 bg-primary text-white">
  <header class='h1 text-center text-dark'>My Team</header>
  </div>
    <body>
  <div class = "row ">
  ${managerGen(name,employId,eMail,officeNum)}
  ${engineerGen(eName,eEmployId,eEMail,gitHub)}
  ${internGen(iName,iEmployId,iEMail,school)}
  
  
  </div>
    </body>
    </main>
    </html>
    `;
};



