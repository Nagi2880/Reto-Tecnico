import { Request, Response} from 'express';
import {NaveModel, Nave} from '../models/naveSchema';
class RoutesController {

    //Get - Obtener y Mostrar
    public async naves (_req:Request, res:Response){
        const allnaves: Nave[] = await NaveModel.find();
        return res.json(allnaves)
    }

    //Add - Agregar y guardar
    public async add (req:Request, res:Response){
        
        const {type,name,weight,date,country} = req.body
        const nave = new NaveModel({type,name,weight,date,country})
        
        await nave.save()
        
        console.log(req.body)
        res.json(nave)
    }
    //Put - Editar y actualizar
    public async naveid (req:Request, res:Response){

        const {id,type,name,weight,date,country} = req.body;
        const newNave = {id,type,name,weight,date,country};
        await NaveModel.findByIdAndUpdate(req.params.id, newNave )
        return res.json({estado:'Nave actualizada'})
    }

    //Delete - Obtener y eliminar

    public async delete (req:Request, res:Response){
        await NaveModel.findByIdAndRemove(req.params.id)
        res.json({estado:'Nave eliminada'})
    }

}
export const routesController = new RoutesController()