import  { Router } from 'express';
import { routesController } from '../controllers/routesController';
const router: Router = Router(); //Compara el objeto router con el tipo Router y le doy una interfaz llamada Router

//Ruta get para llamar a la api y pedirle todas las naves disponibles en la DB
router.get('/naves',routesController.naves)

//Ruta para agregar una nueva nave a la DB
router.post('/add',routesController.add)

export default router

