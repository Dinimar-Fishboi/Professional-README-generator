// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(data) {
//   if (data.license[3] === "Apache License, Version 2.0"){
//   return `# ${data.title}

//   User chose the ${data.license[3]}; aka "Apache License, Version 2.0"
  

//   `
//   }
//   else if (data.license[3] === "MIT License"){
//     return `# ${data.title}
  
//     User chose the ${data.license[3]}; aka "MIT License"
    
  
//     `
//     }
//     else if (data.license[3] ===  "Mozilla Public License 2.0"){
//       return `# ${data.title}
    
//       User chose the ${data.license[3]}; aka  "Mozilla Public License 2.0"
      
    
//       `
//       }
//       else if (data.license[3] === "GNU General Public License version 3"){
//         return `# ${data.title}
      
//         User chose the ${data.license[3]}; aka "GNU General Public License version 3"
        
      
//         `
//         }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

[![License: ${data.license[0]}](https://img.shields.io/badge/License-${data.license[1]})](https://opensource.org/licenses/${data.license[2]})

## Description

${data.description}


## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Testing

${data.installation}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please reach out to me.

- [GitHub](#${data.github})
- [Email](#${data.email})

## License and Copyright

 © ${data.name}, ${data.year}

Licensed under the [${data.license[3]}](LICENSE).


`;
}



module.exports = generateMarkdown;
//module.exports = renderLicenseLink;