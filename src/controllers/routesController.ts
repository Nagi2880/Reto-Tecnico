import { Request, Response} from 'express';

class RoutesController {

    public naves (_req:Request, res:Response){
        res.send('hello world')
    }
}
export const routesController = new RoutesController()