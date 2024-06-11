import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
// import { type } from 'os';

inquirer
  .prompt([
{
    type:'input',
    message : "give me a url",
    name :'url'
}
  ])
  .then((answers) => {
    const url = answers.url;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('quImg.png'));
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });