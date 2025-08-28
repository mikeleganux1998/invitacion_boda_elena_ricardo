require('dotenv').config();

const express = require ('express')
const morgan = require('morgan')
const path = require('path')
const bodyParser = require('body-parser')

const db = require('./conf/db')
const app = express()

//configuraciones 

app.set('port',3200)
app.set('appName','invitacion_digital')

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'pug')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

app.use(morgan('dev'))

app.use('/assets', express.static(path.join(__dirname, 'assets')))

//rutas
app.use(require('./viewEngine/routes'))
app.use('/api', require('./routes/_api'))

//Inicializando el servidor
app.listen(app.get('port'), () => {
    console.log(app.get('appName'))
    console.log("Server port:", app.get('port'))

})
