// TODO: Include packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter project title:",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description?",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter the installation instructions:",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter the usage information:",
    name: "usage",
  },
  {
    type: "input",
    message: "Who contributed to this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are the testing intructions?",
    name: "tests",
  },
  {
    type: "list",
    message: "Please choose a license:",
    name: "license",
    choices: ["MIT", "Mozilla", "Apache"],
  },
  {
    type: "input",
    message: "What is your Github username?:",
    name: "github",
  },
  {
    type: "input",
    message: "Please enter your email:",
    name: "email",
  },
];
inquirer.prompt(questions).then((response) => {
  let markdown = generateMarkdown(response);
  fs.writeFileSync("README.md", markdown);
});
// TODO: Create a function to write README file
// seems like it should call fs.writeFile
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// this will probably call inquirer.prompt(...).then(...)
function init() {}

// Function call to initialize app
init();
