const path = require('path');

const express = require('express');

const app = express();

const port = process.env.PORT || 4000;


app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('/src/routes/index'));

app.use('/archives', express.static( 'archives'));      //esto agrega todo lo que es css y js


app.listen(port);

app.get('/' , (request, response) => {

    response.sendFile(path.resolve(__dirname , "/index.html"))


});


console.log('Server on port', port);
