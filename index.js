// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';

const generate = ({ name, location, github, linkedin }) =>
  `# README Generator 

  ## Description:

  ## Table of Contents:

  ## Installation:

  ## Usage:

  ## License: 

  ## Contributing:

  ## Tests:

  ## Questions:`;

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "nameQuestion"
    }, {
      type: "input",
      message: "What languages do you know?",
      name: "languages"
    }, {
      type: "list",
      message: "What is your preferred method of communication",
      name: "communication",
      choices: ["Text","Email","Call"]
    }
  ])
  .then((answers) => {
    const htmlPageContent = generate(answers);

// TODO: Create a function to write README file
// seems like it should call fs.writeFile
// function writeToFile(fileName, data) {

fs.writeFile('README.md', htmlPageContent, (err) =>
  err ? console.log(err) : console.log('Successfully created readme!')
);
});
// TODO: Create a function to initialize app
// this will probably call inquirer.prompt(...).then(...) 
// function init() {}

// Function call to initialize app
// init();