// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Apache License 2.0") {
    license = "Apache%20License%202.0";
  } else if (license == "GNU GPLv3"){
    license = "GNU%20GPLv3";
  } else if (license == "MIT License"){
    license = "MIT%20License";
  } else if (license == "The Unlicense"){
    license ="The%20Unlicense";
  };
  return `
  ![badge](https://img.shields.io/badge/license-${license}-blueviolet.png)
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

${renderLicenseBadge(data.license)}

${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## License

This project is licensed with ${data.license}

## Questions

If you have questions, please contact me on GitHub here: [${data.qUsername}](https://github.com/${data.qUsername})
or by email here: [${data.qEmail}](mailto:${data.qEmail})



`;
}

module.exports = generateMarkdown;
