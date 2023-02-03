// The packages needed for this application
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

//function returning inquirer prompt questions
function initPromp() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your title of your project?",
      name: "title",
      default: "Buck's README",
    },
    {
      type: "input",
      message: "Write a brief description of your project: ",
      name: "description",
      default: "README generator",
    },
    {
      type: "input",
      message: "Describe the installation process if any: ",
      name: "installation",
      default: "npm install",
    },
    {
      type: "input",
      message: "What is the usage of this project?",
      name: "usage",
      default: "README Generator",
    },
    {
      type: "list",
      message: "Chose the appropriate license for this project: ",
      choices: ["MIT", "APACHE2.0", "GPL3.0", "BSD3", "None"],
      name: "license",
      default: "MIT",
    },
    {
      type: "input",
      message: "Who are the contributors of this projects?",
      name: "contributing",
      default: "Buck Blocker",
    },
    {
      type: "input",
      message: "What is your GitHub username?:",
      name: "github",
      default: "bucknorris336",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
      default: "buckblocker90@gmail.com",
    },
  ]);
}
// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

//function to initialize app
function init() {
  initPromp().then((response) => {
    console.log(`The title of the project is ${response.title}`);
    console.log(`The description is ${response.description}`);
    console.log(`The installation process is ${response.installation}`);
    console.log(`The usage is ${response.usage}`);
    console.log(`The license selected is ${response.license}`);
    console.log(`The contributing members are ${response.contributing}`);
    console.log(`The GitHub username: ${response.github}`);
    console.log(`The email used ${response.email}`);
    writeToFile("./dist/README.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();
