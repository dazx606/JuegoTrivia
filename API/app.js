/*
    IMPORTAR LOS MODULOS
*/
const express = require('express');
//const morgan = require('morgan');
const bodyParser = require('body-parser'); //combierte el body en json
const questionController = require('./api/questions/controller');
const userController = require('./api/users/controller')
require('dotenv').config();
const morgan = require('morgan');
const database = require('./database/conection');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');


/*
    INICIAR LA CONFIGURACION
 */

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); // convierte el formdata en json (datos de formularios)
const port = process.env.PORT;
app.use(morgan(process.env.MORGAN_MODE)); //muestra en consola las peticiones que se hacen a la api
// app.use(cors()); de esta manera recibe todos los dominios
app.use(cors(/*{origin:["www.misdominios"]}*/));
app.use(helmet());
app.use(compression());

/*
    INICIALIZAR LAS RUTAS
 */

app.use("/api/questions", questionController);
app.use("/api/users", userController);



/*
    CONFIGURAR DONDE EL API VA A  ESTAR MONITOREANDO PETICIONES
*/

database.connect()
    .then(function(){
        app.listen(port,function(){
            console.log("API ejecutandoce en el puerto " + port);
            //console.log(database.getConnection()); 
        })
    })
    .catch(function(error){
        console.log("se produjo un error al conectar");
        console.log(error);
    })


/*
    INICIAR EL SERVIDOR
 */


