
const app = require("./src/app");
/*
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

app.use('/public', express.static( 'public'));      //esto agrega todo lo que es css y js
app.use('/generador.html', express.static( 'generador.html'));      //esto agrega todo lo que es css y js
*/

//app.use(require('./archives/public'));      //esto agrega todo lo que es css y js


const port = process.env.PORT || 4000

app.listen(port);
console.log('Server on port', port);