// Prompts made to be used by Inquirer
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 Characters to be in the logo:',
        validate: function (input) {
            if (input.length <= 3) {
              return true;
            } else {
              return `Text must be 3 characters or fewer.`;
            }
          },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color should the text be (color keyword or hex number):'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape should the logo be:',
        choices:
        [
            'Circle',
            'Square',
            'Triangle',
        ]
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color should the shape be (color keyword or hex number):'
    }
]

// Exports questions object to be imported
module.exports = questions;