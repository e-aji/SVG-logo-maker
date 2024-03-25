const inquire = require('inquirer');
const {writeFile} = require('fs/promises');
const {Circle, Triangle, Square} = require('./shapes');
const questions = require('./questions');
const {LogoText, SVG} = require('./Svg');

class CLI {
    constructor() {
    }

    run () {
        return inquirer
        .prompt(questions)
        .then((responses) => {
            const svg = this.generateSVG(responses);
            const markup = svg.render();
            return writeFile("logo.svg", markup);
        })
        .then(() => console.log('Logo created successfully!'))
        .catch((err) => console.error('Something went wrong!',err));
    };
    }

    generateSVG(options.shape){
        const LogoText = new LogoText(options.text, options.textColor);
        switch (options.shape) {
            case "circle":
                const circle = new Circle(options.shapeColor);
                return new SVG(circle), logoText;
            case "square":
                const square = new Square(options.shapeColor);
                return new SVG(square), logoText;
            case "triangle":
                const triangle = new Triangle(options.shapeColor);
                return new SVG(triangle), logoText;
        }
    
    }

    module.exports = CLI;