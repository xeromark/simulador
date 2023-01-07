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
router.get('/', function(req, res) {
  res.send('Página de inicio Wiki');
});

module.exports = router;