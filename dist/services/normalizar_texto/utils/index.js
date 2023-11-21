"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateReporte = exports.frecuenciasPalabras = exports.eliminarSaltosLinea = exports.eliminarPuntuacionesNumeros = exports.quitarStopWordsEspanol = exports.contarPalabras = exports.aMinusculas = void 0;
const stopword_1 = require("stopword");
const aMinusculas = (texto) => texto.toLowerCase();
exports.aMinusculas = aMinusculas;
const contarPalabras = (texto) => {
    const palabras = texto.split(" ");
    return palabras.length;
};
exports.contarPalabras = contarPalabras;
const quitarStopWordsEspanol = (texto) => {
    return (0, stopword_1.removeStopwords)(texto.split(" "), stopword_1.spa);
};
exports.quitarStopWordsEspanol = quitarStopWordsEspanol;
const eliminarPuntuacionesNumeros = (texto) => (texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()0-9.]/g, ''));
exports.eliminarPuntuacionesNumeros = eliminarPuntuacionesNumeros;
const eliminarSaltosLinea = (texto) => (texto.replace(/\n/g, ''));
exports.eliminarSaltosLinea = eliminarSaltosLinea;
const frecuenciasPalabras = (arrayPalabras) => {
    const frecuencias = {};
    arrayPalabras.forEach(palabra => {
        if (frecuencias[palabra]) {
            frecuencias[palabra] += 1;
        }
        else {
            frecuencias[palabra] = 1;
        }
    });
    const items = Object.entries(frecuencias);
    items.sort((a, b) => b[1] - a[1]);
    const objetoOrdenado = Object.fromEntries(items);
    return objetoOrdenado;
};
exports.frecuenciasPalabras = frecuenciasPalabras;
const generateReporte = (texto) => {
    const sinsaltos = (0, exports.eliminarSaltosLinea)(texto);
    const minusculas = (0, exports.aMinusculas)(sinsaltos);
    const sinPuntuacionesNumeros = (0, exports.eliminarPuntuacionesNumeros)(minusculas);
    const removedStopWords = (0, exports.quitarStopWordsEspanol)(sinPuntuacionesNumeros);
    const frecuencias = (0, exports.frecuenciasPalabras)(removedStopWords);
    return {
        contador: removedStopWords.length,
        frecuencias
    };
};
exports.generateReporte = generateReporte;
