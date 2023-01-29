// TODO: Include packages needed for this application
const fs = require("fs");

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
      name: "usage",
      message: "What is this project usage for?",
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: [
        "Apache (Apache-2.0)",
        "BSD-3-Clause",
        "BSD-2-Clause",
        "GNU (LGPL)",
        "MIT",
        "Mozilla (MPL-2.0)",
        "Common Development and Distribution License 1.0 (CDDL-1.0)",
      ],
    },
    {
      type: "input",
      message: "Who are the contributors of this projects?",
      name: "contributing",
    },
    {
      type: "input",
      message: "What is your GitHub username?:",
      name: "username",
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
function generateData(data) {
  return `${data.name}
   ${data.email}
   ${data.fun}
  `;
}

// TODO: Create a function to initialize app
function init() {
  initPromp().then((response) =>
    writeToFile("README.md", generateData(response))
  );
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
