import  { Router } from 'express';
import { routesController } from '../controllers/routesController';
const router: Router = Router(); //Compara el objeto router con el tipo Router y le doy una interfaz llamada Router

//Ruta get para llamar a la api y pedirle todas las naves disponibles en la DB
router.get('/naves',routesController.naves)

//Ruta post para agregar una nueva nave a la DB
router.post('/naves/add',routesController.add)

//Ruta para editar toda una unica nave sabiendo su id
router.put('/naves/:id',routesController.naveid)

export default router

