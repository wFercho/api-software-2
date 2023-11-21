"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contarPalabras = exports.aMinusculas = void 0;
const aMinusculas = (texto) => texto.toLowerCase();
exports.aMinusculas = aMinusculas;
const contarPalabras = (texto) => {
    const palabras = texto.split(" ");
    return palabras.length;
};
exports.contarPalabras = contarPalabras;
