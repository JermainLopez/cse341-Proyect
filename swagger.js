const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Recipes API',
        description: 'Recipes API with Swagger by Jermain Lopez'
    },
    host: 'cse341-proyec-recipe-book.herokuapp.com',
    schemes: ['https']
};

const outputFile = './swagger-recipe-output.json';
const endpointsFiles = ['./routes/index.js'];


swaggerAutogen(outputFile, endpointsFiles, doc);