import { prop, getModelForClass } from "@typegoose/typegoose";


class Nave{
    @prop()
    public type!:string;

    @prop()
    public name!:string;

    @prop()
    public weight!:string;

    @prop()
    public date!: string;

    @prop()
    public country!: string;
}

const NaveModel = getModelForClass(Nave)

export {NaveModel,Nave}