"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routesController_1 = require("../controllers/routesController");
const router = (0, express_1.Router)(); //Compara el objeto router con el tipo Router y le doy una interfaz llamada Router
//Ruta get para llamar a la api y pedirle todas las naves disponibles en la DB
router.get('/naves', routesController_1.routesController.naves);
//Se pide las naves tipo vehiculo lanzadera
router.get('/naves/lanzaderas', routesController_1.routesController.navestipo);
//Se pide las naves tipo Naves espaciales no tripuladas
router.get('./naves/notripuladas', routesController_1.routesController.navestipo2);
//Se pide las naves tipo Naves espaciales tripuladas
router.get('./naves/tripuladas', routesController_1.routesController.navestipo3);
//Ruta post para agregar una nueva nave a la DB
router.post('/naves/add', routesController_1.routesController.add);
//Ruta put para editar toda una unica nave sabiendo su id
router.put('/naves/:id', routesController_1.routesController.naveid);
//Ruta delete para eliminar alguna nave sabiendo su id
router.delete('/naves/delete/:id', routesController_1.routesController.delete);
exports.default = router;
