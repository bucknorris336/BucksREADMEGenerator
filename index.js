// TODO: Include packages needed for this application
const fs = require("fs");

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];
function initPromp() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "Where did you grow up?",
      name: "grow",
    },
    {
      type: "input",
      message: "What do you like to do for fun?:",
      name: "fun",
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
   ${data.grow}
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
