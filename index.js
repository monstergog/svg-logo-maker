const fs = require('fs');
const inquirer = require('inquirer');
const svgGen = require('./lib/generateSVG.js');
const questions = require('./lib/questions.js')

function writeSVGFile(fileName, data) {
    fs.writeFileSync(fileName, svgGen(data))
}

function init() {
    inquirer.prompt(questions)
    .then(((data) => {
        console.log(data);
        writeSVGFile('logo.svg', data);
        console.log('Generated logo.svg')
    }))
}

init();