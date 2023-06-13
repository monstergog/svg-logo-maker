const {Circle, Square, Triangle} = require('./shapes.js');

// Tests to be run with jest
describe('Shape', () => {
    describe('Circle Color - Incorrect', () => {
        it('Should throw an error if the shape is NOT a green Circle', () => {
            const shape = new Circle('red');
            expect(shape.render()).toEqual('<circle cx="110" cy="110" r="90" fill="green"/>');
        });
    })

    describe('Square Color - Incorrect', () => {
        it('Should throw an error if the shape is NOT a red Square', () => {
            const shape = new Square('blue');
            expect(shape.render()).toEqual('<rect x="10" y="10" width="225" height="225" fill="red"/>');
        });
    })

    describe('Triangle Color - Incorrect', () => {
        it('Should throw an error if the shape is NOT a blue Triangle', () => {
            const shape = new Triangle('green');
            expect(shape.render()).toEqual('<polygon points="10,170 220,170 110,10" fill="blue"/>');
        });
    })

    describe('Circle Color - Correct', () => {
        it('Should return true if the shape IS a green Circle', () => {
            const shape = new Circle('green');
            expect(shape.render()).toEqual('<circle cx="110" cy="110" r="90" fill="green"/>');
        });
    })

    describe('Square Color - Correct', () => {
        it('Should return true if the shape IS a red Square', () => {
            const shape = new Square('red');
            expect(shape.render()).toEqual('<rect x="10" y="10" width="225" height="225" fill="red"/>');
        });
    })

    describe('Triangle Color - Correct', () => {
        it('Should return true if the shape IS a blue Triangle', () => {
            const shape = new Triangle('blue');
            expect(shape.render()).toEqual('<polygon points="10,170 220,170 110,10" fill="blue"/>');
        });
    })
});