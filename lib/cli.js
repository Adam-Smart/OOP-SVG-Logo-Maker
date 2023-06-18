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

            const svg = this.generateSVG(responses);

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