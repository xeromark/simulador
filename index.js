const path = require('path');

const express = require('express');

const app = express();
/*
app.use(express.json());
app.use(express.urlencoded({extended: false}))


// Routes


app.use(require('/archives/tabla.js'));

app.use(require('/archives/tablaDisenio.css'));
*/
app.use(require('./src/routes/index'));


app.use('/archives', express.static( 'archives'));      //esto agrega todo lo que es css y js


app.get('/' , (request, response) => {

    response.sendFile(path.resolve(__dirname , "./index.html"))

});
const port = process.env.PORT || 4000;

app.listen(port);


console.log('Server on port', port);
