//These are the test to make sure that it responds correctly

const {Circle, Square, Triangle} = require("./shapes")

test('should return a triangle that is blue', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

test('should return a circle that is green', () => {
const shape = new Circle();
shape.setColor("green");
expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />');
});

test('should return a square that is pink', () => {
 const shape = new Square();
 shape.setColor("pink");
 expect(shape.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="pink" />');

 });
