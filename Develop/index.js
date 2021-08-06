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
        message: 'Please add a description',
        name: 'description',
        },
    {
        type: 'input',
        message: 'How does the user install the program?',
        name: 'installation',
        },
    {
        type: 'input',
        message: 'How does the user, you know, USE the program?',
        name: 'usage',
        },
    {
        type: 'input',
        message: 'How do you contribute to this project?',
        name: 'contributing',
        },
    {
        type: 'input',
        message: 'What tests were run to check this project?',
        name: 'tests',
        },
    {
        type: 'checkbox',
        message: "Which licence would you like to use? (If you're unsure, google it)",
        name: 'license',
        choices: ['Apache Licence', 'MIT Licence', 'Mozilla-Public Licence', 'GNU-General-Public Licence', 'Common-Development-and Distribution Licence', 'None']
        },
    {
        type: 'input',
        message: 'Add your GitHub URL (this is so people can contact you about your project)',
        name: 'github',
        },
    {
        type: 'input',
        message: 'Add your email (this is so people can contact you about your project)',
        name: 'email',
        },
    {
        type: 'input',
        message: 'Pleae type your full name/name of your organisation for Copyright purposes',
        name: 'name',
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
    console.log('Please answer all questions. We recommend editing it before pasting it in the command line')
    inquirer.prompt(questions)
    .then(function (newInput) {
      console.log(newInput)
      writeToFile("README.md", generateMarkdown(newInput));
    }); 
}



// Function call to initialize app
init();
