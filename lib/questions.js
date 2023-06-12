const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 Characters to be in the logo:'
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