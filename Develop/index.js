// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type: 'input',
    //     message: 'What is the title of your Project?',
    //     name: 'title',
    //   },
    // {
    //     type: 'input',
    //     message: 'Please add a description',
    //     name: 'description',
    //     },
    // {
    //     type: 'input',
    //     message: 'How does the user install the program?',
    //     name: 'installation',
    //     },
    // {
    //     type: 'input',
    //     message: 'How does the user, you know, USE the program?',
    //     name: 'usage',
    //     },
    // {
    //     type: 'input',
    //     message: 'How do you contribute to this project?',
    //     name: 'contributing',
    //     },
    // {
    //     type: 'input',
    //     message: 'What tests were run to check this project?',
    //     name: 'tests',
    //     },
    // {
    //     type: 'input',
    //     message: 'Add your GitHub URL (this is so people can contact you about your project)',
    //     name: 'github',
    //     },
    // {
    //     type: 'input',
    //     message: 'Add your email (this is so people can contact you about your project)',
    //     name: 'email',
    //     },
    // {
    //     type: 'input',
    //     message: 'Pleae type your full name/name of your organisation for Copyright purposes',
    //     name: 'name',
    //     },
    {
        type: 'expand',
        message: "Which licence would you like to use? (If you're unsure, google it)",
        name: 'license',
        choices: [
            {
                key: 'a',
                name: 'Apache-2.0',
                value: [
                    "Apache-2.0",
                    "Apache%202.0-blue.svg",
                    "Apache License, Version 2.0"
                ]
        },
            {
                key: 'b',
                name: 'The MIT License',
                value: [
                    "MIT",
                    "MIT-yellow.svg",
                    "MIT License"
                ]
        },
            {
                key: 'c',
                name: 'Mozilla Public License 2.0',
                value: [
                    "MPL-2.0",
                    "MPL%202.0-brightgreen.svg",
                    "AMozilla Public License 2.0"
                ]
        },
            {
                key: 'd',
                name: 'GNU General Public License version 3',
                value: [
                    "Apache-2.0",
                    "AGPL%20v3-blue.svg",
                    "Apache License, Version 2.0"
                ]
            },
            {
                key: 'e',
                name: 'Fifth license option',
                value: [
                    "Apache-2.0",
                    "AGPL%20v3-blue.svg",
                    "Apache License, Version 2.0"
                ]
            },
        ],
        // validate(text) {
        //     if (text === this.choices[0]) {
        //         this.shorthand === 'Apache-2.0';
        //         this.web === 'Apache%202'
        //     }

        // }
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
    console.log(questions[9]);
    console.log('Please answer all questions. We recommend editing it before pasting it in the command line.')
    console.log("ALSO: if you DON'T want to use some of the sections in this handy template; just do a keysmash and remove the bit you don't want later.")
    inquirer.prompt(questions)
    .then(function (newInput) {
      console.log(newInput)
      console.log(newInput.license[1])
      writeToFile("README.md", generateMarkdown(newInput));
      
    }); 
}



// Function call to initialize app
init();
