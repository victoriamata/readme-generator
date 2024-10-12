// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//
function renderLicenseBadge(license) {
  if (license === "Apache") {
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Mozilla") {
    return "[Click to read more!](https://opensource.org/license/mpl-2-0)";
  } else if (license === "MIT") {
    return "[Click to read more!](https://opensource.org/licenses/MIT)";
  } else {
    return "[Click to read more!](https://opensource.org/license/apache-2-0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { 
  console.log("data");
  console.log(data);


  const {
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    license,
    github,
    email,
  } = data;

  // return responses 
  return `
    #${title}
   ## Description:
   ${description}
   ## Table of Contents:
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contributing](#contributing)
   * [Tests](#tests)
   * [Questions](#questions)
   ## Installation:
   ${installation}
   ## Usage:
   ${usage}
   ## License: 
   ${renderLicenseBadge(license)}
   ${renderLicenseLink(license)}
   ## Contributing:
   ${contributing}
   ## Tests:
   ${tests}
   ## Questions:
   * Github: [Click this link!](https://github.com/${github})
   * Email: ${email}`;
}

// export file to index.js
export default generateMarkdown;