const inquirer = require("inquirer")
const {writeFile} = require("fs/promises")
const {Circle, Square, Triangle} = require("./shapes")
const questions = require("./questions")
const {LogoText, SVG} = require("./Svg")

//This class is used to take back the responses that the user has given to the questions and uses it to create the logo
class CLI {
    constructor(){

    }
    run(){
        return inquirer
        .prompt(questions)
        .then((responses) => {

            // This takes in the responses from the questions
            const svg = this.createLogo(responses);

            // this uses the responses and renders the logo
            const markup = svg.render();

            //this takes the logo that has been rendered and creates a file to save the logo to
            return writeFile("logo.svg", markup);

        
        
        })

    .then(() => console.log("Created Logo!"))
    .catch((err) => {
        console.log(err)
        console.log("Creation Unsuccessful!")
    })
    }

// This function is responsible for giving the users the options for there logo by giving them the option of adding text to the logo and the shape they want and the colour
createLogo(options) {
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
}
module.exports = CLI;