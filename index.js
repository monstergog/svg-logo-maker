const fs = require('fs');
const inquirer = require('inquirer');
const {Shape, Circle, Square, Triangle} = require('./lib/shapes.js');
const svgGen = require('./lib/generateSVG.js');
const questions = require('./lib/questions.js')

function renderShape(shape) {
    switch(shape) {
        case 'circle':
            return ''
            break;
        case 'square':
            return ''
            break;
        case 'triangle':
            return ''
            break;
    }
}


function writeSVGFile(fileName, text, shape) {
    fs.writeFileSync(fileName, svgGen(data))
}

function init() {
    inquirer.prompt(questions)
    .then(((data) => {
        writeSVGFile('logo.svg', text, renderShape(data.shape, data.shapeColor));
    }))
}

init();