// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
{
  type: 'input',
  message: 'Please enter your Git URL',
  name: 'GitHub',
},
{
  type: 'input',
  message: 'Please enter you LinkedIn URL',
  name: 'LinkedIn',
},
{
  type: 'input',
  message: 'This is the About me Section',
  name: 'Bio',
},
{
  type: 'input',
  message: 'Where are you from?',
  name: 'Location',
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
function init() {}

// Function call to initialize app
init();
