import { Request, Response} from 'express';
import {NaveModel, Nave} from '../models/naveSchema';
class RoutesController {

    public async naves (_req:Request, res:Response){
        const allnaves: Nave[] = await NaveModel.find();
        return res.json(allnaves)
    }
    public async add (req:Request, res:Response){
        
        const {type,name,weight,date,country} = req.body
        const nave = new NaveModel({type,name,weight,date,country})
        
        await nave.save()
        
        console.log(req.body)
        res.send(console.log('Nave agregada a la lista'))
    }

    public async naveid (req:Request, res:Response){

        const {id} = req.params;
        await NaveModel.updateOne({id}, req.body);
        const updatedNave: Nave | null= await NaveModel.findById(id)
        console.log('la nave fue actualizada')
        return res.json(updatedNave)
    }

}
export const routesController = new RoutesController()