const path = require('path');

const express = require('express');

const app = express();

const port = process.env.PORT || 4000;

app.listen(port);

app.get('/' , (request, response) => {

    response.sendFile(path.resolve(__dirname , "/index.html"))


});


console.log('Server on port', port);
