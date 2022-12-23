"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routesController = void 0;
const naveSchema_1 = require("../models/naveSchema");
class RoutesController {
    //Get - Obtener y Mostrar
    naves(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const allnaves = yield naveSchema_1.NaveModel.find();
            return res.json(allnaves);
        });
    }
    navestipo(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const navesLanzadera = yield naveSchema_1.NaveModel.find({ "type": "Vehiculo lanzadera" });
            return res.json(navesLanzadera);
        });
    }
    navestipo2(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const navesLanzadera = yield naveSchema_1.NaveModel.find({ "type": "Naves espaciales no tripuladas" });
            return res.json(navesLanzadera);
        });
    }
    navestipo3(_req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const navesLanzadera = yield naveSchema_1.NaveModel.find({ "type": "Naves espaciales tripuladas" });
            return res.json(navesLanzadera);
        });
    }
    //Add - Agregar y guardar
    add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { type, name, weight, date, country } = req.body;
            const nave = new naveSchema_1.NaveModel({ type, name, weight, date, country });
            yield nave.save();
            console.log(req.body);
            res.json(nave);
        });
    }
    //Put - Editar y actualizar
    naveid(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, type, name, weight, date, country } = req.body;
            const newNave = { id, type, name, weight, date, country };
            yield naveSchema_1.NaveModel.findByIdAndUpdate(req.params.id, newNave);
            return res.json({ estado: 'Nave actualizada' });
        });
    }
    //Delete - Obtener y eliminar
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield naveSchema_1.NaveModel.findByIdAndRemove(req.params.id);
            res.json({ estado: 'Nave eliminada' });
        });
    }
}
exports.routesController = new RoutesController();
