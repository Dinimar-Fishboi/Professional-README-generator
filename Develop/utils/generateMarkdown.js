// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

[![License](https://img.shields.io/badge/License-${data.license}%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

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

 © ${data.name},

Licensed under the [${data.license} License](LICENSE).


`;
}



module.exports = generateMarkdown;
