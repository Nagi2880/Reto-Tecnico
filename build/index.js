"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npm run dev para iniciar como desarrollo los archivos TS
const express_1 = __importDefault(require("express"));
//Inicializaciones
const app = (0, express_1.default)();
//middleware para transformar req.body a json
app.use(express_1.default.json());
//Configuraciones
app.set('port', process.env.PORT || 3000); //En caso de que exita ya un puerto, de lo contrario usar el 3000
//Base de datos
require("./database/db");
//Importando rutas
const routes_1 = __importDefault(require("./routes/routes"));
//routes
app.use('/api', routes_1.default);
//Test route, porfavor ignorar
app.get('/ping', (_req, res) => {
    console.log('someone ping here');
    res.send('pong');
});
//Activa el server en el puerto estipulado
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});
