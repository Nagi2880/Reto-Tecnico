import  { Router } from 'express';
import { routesController } from '../controllers/routesController';
const router: Router = Router(); //Compara el objeto router con el tipo Router y le doy una interfaz llamada Router

//Ruta get para llamar a la api y pedirle todas las naves disponibles en la DB
router.get('/naves',routesController.naves)
//Se pide las naves tipo vehiculo lanzadera
router.get('/naves/lanzaderas',routesController.navestipo)
//Se pide las naves tipo Naves espaciales no tripuladas
router.get('/naves/notripuladas',routesController.navestipoNT)
//Se pide las naves tipo Naves espaciales tripuladas
router.get('/naves/tripuladas',routesController.navestipoT)


//Ruta post para agregar una nueva nave a la DB
router.post('/naves/add',routesController.add)

//Ruta put para editar toda una unica nave sabiendo su id
router.put('/naves/:id',routesController.naveid)

//Ruta delete para eliminar alguna nave sabiendo su id
router.delete('/naves/delete/:id',routesController.delete)
export default router

