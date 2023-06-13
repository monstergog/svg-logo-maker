// Import all required files
const fs = require('fs');
const inquirer = require('inquirer');
const svgGen = require('./lib/generateSVG.js');
const questions = require('./lib/questions.js')

// Function to write to a file using passed in user input
function writeSVGFile(fileName, data) {
    fs.writeFileSync(fileName, svgGen(data))
}

// Function to prompt user for input and sent to be written
function init() {
    inquirer.prompt(questions)
    .then(((data) => {
        writeSVGFile('logo.svg', data);
        console.log('Generated logo.svg')
    }))
}

init();