// Import required modules
const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const {Circle, Triangle, Square} = require('./shapes');
const questions = require('./questions');
const {LogoText, SVG} = require('./svg');

class CLI {
    constructor() {
    }

    run() {
        // Prompt user for input to questions using inquirer
        return inquirer

        .prompt(questions)
        .then((response) => {
            // Generate SVG based on user input
            const svg = this.generateSVG(response);
            // Render SVG to markup
            const markup = svg.render();
            // Write SVG to file named 'logo.svg'
            return writeFile("logo.svg", markup);
        })
        .then(() => console.log('Generated logo.svg successfully!'))
        .catch((err) => console.error('Something went wrong!',err));
    };

    // Function to generate SVG elements based on user input
    generateSVG(options) {
        const logoText = new LogoText(options.text, options.textColor);
        switch (options.shape) {
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

};

// Export the CLI class
    module.exports = CLI;