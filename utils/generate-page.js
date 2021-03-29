// this is where i will use writeFile() , and copyFile() methods 
const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
         if (err) {
             reject(err);

             resolve({
                 ok: true,
                 message: 'file created you did it!'
             });
         }
        });
    });
}

module.exports = {writeFile}