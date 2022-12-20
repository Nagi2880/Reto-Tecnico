import  { Router } from 'express';
import { routesController } from '../controllers/routesController';
const router: Router = Router(); //Compara el objeto router con el tipo Router y le doy una interfaz llamada Router

router.get('/naves',routesController.naves)

export default router

