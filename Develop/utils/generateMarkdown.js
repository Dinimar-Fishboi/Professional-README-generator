
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

## Tests

${data.tests}

## Contributing

${data.contributing}

## Questions

If you have any questions, please reach out to me.

- [${data.github}](#${data.github})
- [${data.email}](#${data.email})

## License and Copyright

 © ${data.name}, ${data.year}

Licensed under the [${data.license[3]}](LICENSE).

`;
}



module.exports = generateMarkdown;