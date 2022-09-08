// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

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
    message: 'Choose a license for your project. * indicates the most common license choices.',
    choices: [
        "*Apache License 2.0",
        "Boost Software License 1.0",
        'GNU AGPLv3',
        "*GNU GPLv3",
        'GNU LGPLv3',
        "ISC License",
        '*MIT License',
        'Mozilla Public License 2.0',
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
    //do stuff with the answers
    console.log(answers);

    //after all answers are collected, write to file!
    //TODO - build a string that uses our answers to generate some markdown, and write that to
    //our file as the 'data' parameter. (replace the test values below)
    writeToFile("test.txt", "here is some data");
  });
}

// Function call to initialize app
init();
