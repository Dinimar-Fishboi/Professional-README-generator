// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const renderLicense = require('./utils/generateLicense')

// This function ensures that the user enters some form of input when running the
// command line. Function not required for expanded license question.


const confirmInput = (value) => {
    if (value){
        return true;
    } else {
        console.log("Please answer the question or enter a keysmash");
        return false;
    }
}

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Project?',
        name: 'title',
        validate: confirmInput,
      },
    {
        type: 'input',
        message: 'Please add a description',
        name: 'description',
        validate: confirmInput,
        },
    {
        type: 'input',
        message: 'How does the user install the program?',
        name: 'installation',
        validate: confirmInput,
        },
    {
        type: 'input',
        message: 'How does the user, you know, USE the program?',
        name: 'usage',
        validate: confirmInput,
        },
    {
        type: 'input',
        message: 'How do you contribute to this project?',
        name: 'contributing',
        validate: confirmInput,
        },
    {
        type: 'input',
        message: 'What tests were run to check this project?',
        name: 'tests',
        validate: confirmInput,
        },
    {
        type: 'input',
        message: 'Add your full GitHub URL (this is so people can contact you about your project)',
        name: 'github',
        validate: confirmInput,
        },
    {
        type: 'input',
        message: 'Add your full email (this is so people can contact you about your project)',
        name: 'email',
        validate: confirmInput,
        },
    {
        type: 'input',
        message: 'Pleae type your full name/name of your organisation for Copyright purposes',
        name: 'name',
        validate: confirmInput,
        },
    {
        type: 'input',
        message: "We're also going to need the year/s this project was created for Copyright purposes. If it stretches over multiple years please use the following format: 'FirstYear-FinalYear",
        name: 'year',
        validate: confirmInput,
        },
    {
        type: 'expand',
        message: "You should have a license. Hit 'H' to see all the license options (If you're unsure which one to use, google it)",
        name: 'license',
        choices: [
            {
                key: 'a',
                name: 'Apache License, Version 2.0',
                value: [
                    "Apache-2.0",
                    "Apache%202.0-blue.svg",
                    "Apache-2.0",
                    "Apache License, Version 2.0",
                ]
        },
            {
                key: 'b',
                name: 'The MIT License',
                value: [
                    "MIT",
                    "MIT-yellow.svg",
                    "MIT",
                    "MIT License",
                ]
        },
            {
                key: 'c',
                name: 'Mozilla Public License 2.0',
                value: [
                    "MPL 2.0",
                    "MPL%202.0-brightgreen.svg",
                    "MPL-2.0",
                    "Mozilla Public License 2.0"
                ]
        },
            {
                key: 'd',
                name: 'GNU General Public License version 3',
                value: [
                    "GPL v3",
                    "GPL%20v2-blue.svg",
                    "gpl-3.0",
                    "GNU General Public License version 3"
                ]
            },
        ],
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
    console.log('Please answer all questions. We recommend editing it before pasting it in the command line.')
    console.log("ALSO: if you DON'T want to use some of the sections in this handy template; just do a keysmash and remove the bit you don't want later.")
    inquirer.prompt(questions)
    .then(function (newInput) {
      console.log(newInput)
      writeToFile("README.md", generateMarkdown(newInput));
      writeToFile("LICENSE", renderLicense(newInput));
 
    }); 
}

// Function call to initialize app
init();
