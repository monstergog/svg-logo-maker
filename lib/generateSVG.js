const {Circle, Square, Triangle} = require('./shapes.js');

function renderShape(shape, color) {
    switch(shape) {
        case 'Circle':
            let circle = new Circle(color)
            return circle.render()
            break;
        case 'Square':
            let square = new Square(color)
            return square.render()
            break;
        case 'Triangle':
            let triangle = new Triangle(color)
            return triangle.render()
            break;
    }
}

function generateSVG(data) {
    return `
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

 ${renderShape(data.shape, data.shapeColor)}

 <text x="150" y="150" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.text}</text>

</svg>`
}

module.exports = generateSVG;