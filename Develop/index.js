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
