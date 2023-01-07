const path = require('path');

const express = require('express');

const app = express();


/*

app.get('/' , (request, response) => {

    //response.send("pagina")

        response.sendFile(path.resolve(__dirname , "./archives/index.html"))


});
*/

app.get("/archives", (req, res) => {
    res.render("index");
  });

module.exports = app;