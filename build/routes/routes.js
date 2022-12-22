"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routesController_1 = require("../controllers/routesController");
const router = (0, express_1.Router)(); //Compara el objeto router con el tipo Router y le doy una interfaz llamada Router
//Ruta get para llamar a la api y pedirle todas las naves disponibles en la DB
router.get('/naves', routesController_1.routesController.naves);
//Ruta post para agregar una nueva nave a la DB
router.post('/naves/add', routesController_1.routesController.add);
//Ruta para editar toda una unica nave sabiendo su id
router.put('/naves/:id', routesController_1.routesController.naveid);
router.delete('/naves/:id', routesController_1.routesController.delete);
exports.default = router;
