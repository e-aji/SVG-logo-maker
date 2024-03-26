const questions = [

    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['circle', 'square', 'triangle']

    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for your shape:',

    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text that will appear on your SVG (No more than 3 characters)',

    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for your text:',

    },

];

module.exports = questions;
