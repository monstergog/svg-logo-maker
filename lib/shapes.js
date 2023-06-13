// Base Shape class
class Shape {
    constructor(color) {
        this.color = color;
        this.render = function() {
            return 'Invalid Shape';
        }
    }
}

// Inherits from Shape class and changes render function for each of the following shapes
class Circle extends Shape {
    constructor(color) {
        super(color);
        this.render = function() {
            return `<circle cx="110" cy="110" r="90" fill="${this.color}"/>`;
        }
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
        this.render = function() {
            return `<rect x="10" y="10" width="225" height="225" fill="${this.color}"/>`;
        }
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.render = function() {
            return `<polygon points="10,170 220,170 110,10" fill="${this.color}"/>`;
        }
    }
}

// Exports all shape classes to be imported
module.exports = {Circle, Square, Triangle};