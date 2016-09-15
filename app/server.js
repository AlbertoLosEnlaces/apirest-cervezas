var express = require('express') //llamamos a Express
var app = express()       
var bodyParser = require('body-parser')


/*toda la configuración de bbdd la hacemos en un fichero a parte*/
require('./db')

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())            

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API

app.use(function (req, res, next) {
  console.log('Time:', Date.now())
  next()
})

       
var cors = require('cors')    
var morgan = require('morgan')

/*toda la configuración de bbdd la hacemos en un fichero a parte*/
require('./db')

app.use(morgan('combined'))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// para establecer las distintas rutas, necesitamos instanciar el express router
var router = require('./routes')  
app.use('/api', router)

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)

/*lo añado al final de app/server.js:*/
module.exports = app




var router = require('./routes')
app.use('/api', router)

//arrancamos el servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)

/*lo añado al final de app/server.js:*/
module.exports = app