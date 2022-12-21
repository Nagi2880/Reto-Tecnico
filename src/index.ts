
//npm run dev para iniciar como desarrollo los archivos TS
import express from 'express';

//Inicializaciones
const app = express()

//middleware para transformar req.body a json
app.use(express.json())

//Configuraciones
app.set('port', process.env.PORT || 3000) //En caso de que exita ya un puerto, de lo contrario usar el 3000

//Base de datos
import './database/db'


//Importando rutas

import routes from './routes/routes';


//routes

app.use('/api',routes)



//Test route, porfavor ignorar
app.get('/ping', (_req,res) =>{
    console.log('someone ping here')
    res.send('pong')
})

//Activa el server en el puerto estipulado
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`)
})