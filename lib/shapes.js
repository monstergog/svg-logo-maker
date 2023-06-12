class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor);
    }

    render() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}" />`;
    }
}