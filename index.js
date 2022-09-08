// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is your project name?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a short description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information for your project including instructions and examples for use.",
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What guidelines are there for contributing to your project?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How can a user run tests with your project?'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project.',
    choices: [
        "Apache License 2.0",
        "GNU GPLv3",
        'MIT License',
        "The Unlicense",
    ],
  },
  {
    type: 'input',
    name: 'qUsername',
    message: 'Enter your GitHub username.',
  },
  {
    type: 'input',
    name: "qEmail",
    message: 'Enter an email where users can reach you with questions about your project.',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Readme Generated!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
  
    //string that uses our answers to generate some markdown, and write that to generate markdown
    writeToFile("generateduser.md", generateMarkdown({...answers}));
  });
}

// Function call to initialize app
init();
