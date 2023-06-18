const inquirer = require("inquirer")
const {writeFile} = require("fs/promises")
const {Circle, Square, Triangle} = require("./shapes")
const questions = require("./questions")
const {LogoText, SVG} = require("./svg")

class CLI {
    constructor(){

    }
    run(){
        return inquirer
        .prompt(questions)
        .then((responses) => {

            const svg = this.createLogo(responses);

            const markup = svg.render();

            return writeFile("logo.svg", markup);
        
        })

    .then(() => console.log("Created Logo!"))
    .catch((err) => {
        console.log(err)
        console.log("Creation Unsuccessful!")
    })
    }
}

createLogo(options); {
    const logoText = new LogoText(options.text, options.textColor);

    switch (options.shape){
        case "circle":
            const circle = new Circle(options.shapeColor);
            return new SVG(circle, logoText);
        case "square":
            const square = new Square(options.shapeColor);
            return new SVG(square, logoText);
        case "triangle":
            const triangle = new Triangle(options.shapeColor);
            return new SVG(triangle, logoText);
    }
}
module.exports = CLI;