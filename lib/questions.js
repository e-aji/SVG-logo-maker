const questions = [

    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: ['circle', 'square', 'triangle']

    },
    {
        type: 'input',
        // color or shapeColor?
        name: 'shapeColor',
        message: 'Enter a colour for your shape:',

    },
    {
        type: 'input',
        // text or logoText??
        name: 'text',
        message: 'Enter the text that will appear on your SVG (No more than 3 characters)',

        // validate input - no more than 3 characters
        validate: (input) => {
            if (input.length > 3) {
                return 'Please enter no more than 3 characters'

            } return true
        }

    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for your text:',

    },

];

module.exports = questions;
