const path = require('path');

const express = require('express');

const app = express();


/*

app.get('/' , (request, response) => {

    //response.send("pagina")

        response.sendFile(path.resolve(__dirname , "./archives/index.html"))


});
*/

var router = express.Router();

// Home page route
var index = require('./archives/index.html');
// ...
app.use('/index', index);

module.exports = app;