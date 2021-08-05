// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title',
      },
    {
        type: 'input',
        message: 'What was the motivation for the project?',
        name: 'motivation',
        },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'purpose',
        },
    {
        type: 'input',
        message: 'What problem does this solve?',
        name: 'problemSolve',
        },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
        },
    {
        type: 'checkbox',
        message: "Which licence would you like to use? (If you're unsure, google it)",
        name: 'licensing',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None']
        },
    {
        type: 'input',
        message: 'How do people contribute to your project?',
        name: 'contribution',
        },
    {
        type: 'input',
        message: 'How can your application be tested?',
        name: 'test',
        },
    {
        type: 'input',
        message: 'Add your GitHub URL',
        name: 'github',
        },
    {
        type: 'input',
        message: 'Add your email',
        name: 'email',
        },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
          throw err;
          console.log("Information received")
      })
}

// TODO: Create a function to initialize app
function init() {
    console.log('Please answer as many questions as possible for your README file to stand out')

    inquirer.prompt(questions)
    .then(function (newInput) {
      console.log(newInput)
      writeToFile("README.md", generateMarkdown(newInput));
    });
}

// Function call to initialize app
init();
