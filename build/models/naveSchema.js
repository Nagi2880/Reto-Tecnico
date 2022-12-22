"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nave = exports.NaveModel = void 0;
const typegoose_1 = require("@typegoose/typegoose");
class Nave {
}
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Nave.prototype, "type", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Nave.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Nave.prototype, "weight", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Nave.prototype, "date", void 0);
__decorate([
    (0, typegoose_1.prop)(),
    __metadata("design:type", String)
], Nave.prototype, "country", void 0);
exports.Nave = Nave;
const NaveModel = (0, typegoose_1.getModelForClass)(Nave);
exports.NaveModel = NaveModel;
