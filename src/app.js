const path = require('path');

const express = require('express');

const app = express();


/*

app.get('/' , (request, response) => {

    //response.send("pagina")

        response.sendFile(path.resolve(__dirname , "./archives/index.html"))


});
*/

app.get("/", (req, res) => {
    res.render("./archives/index.html");
  });

module.exports = app;