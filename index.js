// TODO: Include packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];
function initPromp() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Write a brief description of your project: ",
      name: "description",
    },
    {
      type: "input",
      message: "Describe the installation process if any: ",
      name: "installation",
    },
    {
      type: "input",
      message: "What is this project usage for?",
      name: "usage",
    },
    {
      type: "list",
      message: "Chose the appropriate license for this project: ",
      choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
      name: "license",
    },
    {
      type: "input",
      message: "Who are the contributors of this projects?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What is your GitHub username?:",
      name: "github",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
  ]);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  initPromp().then((response) => {
    console.log("response", response);
    writeToFile("README.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();

//inquirer@8.2.4

// npm i = install the package json

// function generateMarkdown(data) {

// return `# ${data.title}
// ## license
// ${renderLicenseBadge(license)} //possible problem #2?
// '
// }
