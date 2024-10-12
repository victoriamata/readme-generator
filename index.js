// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

const generate = ({title, description, installation, usage, contributing, tests, license, github, email}) =>
  `# README Generator 
   ${title}
   ## Description:
   ${description}
   ## Table of Contents:
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
   ## Installation:
   ${installation}
   ## Usage:
   ${usage}
   ## License: 
   ${license}
   ## Contributing:
   ${contributing}
   ## Tests:
   ${tests}
   ## Questions:
   * Github: [Click this link!](https://github.com/${github})
   * Email: ${email}`;

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter project title:",
      name: "title"
    }, {
      type: "input",
      message: "What is the description?",
      name: "description"
    }, {
      type: "input",
      message: "Please enter the installation instructions:",
      name: "installation"
    }, {
      type: "input",
      message: "Please enter the usage information:",
      name: "usage"
    }, {
      type: "input",
      message: "Who contributed to this project?",
      name: "contributing"
    }, {
      type: "input",
      message: "What are the testing intructions?",
      name: "tests"
    }, {
      type: "list",
      message: "Please choose a license:",
      name: "license",
      choices: ["MIT","Mozilla","Apache"]
    }, 
    {
      type: "input",
      message: "What is your Github username?:",
      name: "github"
    }, {
      type: "input",
      message: "Please enter your email:",
      name: "email"
    }
  ])
  .then((answers) => {
    const readmeContent = generate(answers);

// TODO: Create a function to write README file
// seems like it should call fs.writeFile
function writeToFile(fileName, data) {}

fs.writeFile('README.md', readmeContent, (err) =>
  err ? console.log(err) : console.log('Successfully created a README file!')
);
});
// TODO: Create a function to initialize app
// this will probably call inquirer.prompt(...).then(...) 
function init() {}

// Function call to initialize app
init();