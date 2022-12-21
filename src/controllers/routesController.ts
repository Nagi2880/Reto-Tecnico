import { Request, Response} from 'express';

class RoutesController {

    public naves (_req:Request, res:Response){
        res.send('hello world')
    }
    public add (req:Request, res:Response){
        console.log(req.body)
        res.send(console.log('Recibido'))
    }
}
export const routesController = new RoutesController()