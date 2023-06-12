class Shape {
    constructor(color) {
        this.color = color;
        this.render = function() {
            return 'Invalid Shape';
        }
    }
}

class Circle extends Shape {
    constructor(color) {
        super(color);
        this.render = function() {
            return `<circle cx="150" cy="100" r="50" fill="${this.color}"/>`;
        }
    }
}

class Square extends Shape {
    constructor(color) {
        super(color);
        this.render = function() {
            return `<rect x="0" y="0" width="500" height="500" fill="${this.color}"/>`;
        }
    }
}

class Triangle extends Shape {
    constructor(color) {
        super(color);
        this.render = function() {
            return `<polygon points="150, 50 100, 150 200, 150" fill="${this.color}"/>`;
        }
    }
}

module.exports = {Shape, Circle, Square, Triangle};