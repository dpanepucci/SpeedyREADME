// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import colors from 'colors';
import fs from 'fs';
import { type } from 'os';

// TODO: Create an array of questions for user input
const questions = [
{
    type:'input',
    name:'title',
    message:'What is the name of your project?',
},
{
    type:'input',
    name:'description',
    message:'Please provide an overview of your project and its functionality.'
},
{
    type:'input',
    name:'installation',
    message:'How to you install your application?'
},
{
    type:'input',
    name:'usage',
    message:'Please enter step-by-step instructions on how to use your application.'
},
{
    type:'input',
    name:'contribution',
    message:'Who all contributed to this application?'
},
{
    type:'input',
    name:'test',
    message:'Please provide instructions on how to test your application.'
},
{
    type: 'list',
    message:'What type of license does your application use?',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'None/Other'],
},
{
    type:'input',
    name:'questions',
    message:'What is your email?'
},
{
    type:'input',
    name:'github',
    message:'What is your GitHub username?'
},

];

// TODO: Create a function to write README file
function writeToFile(Demo_README, data) {
    fs.writeFile(Demo_README, data, (err) => {
        if (err) {
            console.error('Error writing to file', err);
        } else {
            console.log('README file has been generated successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Tests
${answers.test}

## Questions
If you have any questions, please reach out via email: ${answers.questions} or check out my Github at https://github.com/${answers.github}`;
        writeToFile('Demo_README.md', readmeContent);
    });
}

// Function call to initialize app
init();