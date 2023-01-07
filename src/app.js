const express = require('express');

const app = express();




app.get('/' , (request, response) => {

    response.sendFile(path.resolve(__dirname , "./archives/index.html"))


});

module.exports = app;