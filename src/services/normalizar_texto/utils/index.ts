import { removeStopwords, spa } from "stopword"
export const aMinusculas = (texto: string) => texto.toLowerCase()


export const contarPalabras = (texto: string) => {
    const palabras = texto.split(" ")
    return palabras.length
}


export const quitarStopWordsEspanol = (texto: string) => {
    return removeStopwords(texto.split(" "), spa)
}
export const eliminarPuntuacionesNumeros = (texto: string) => (texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()0-9.]/g, ''));

export const eliminarSaltosLinea = (texto:string) => (texto.replace(/\n/g, ''));

export const frecuenciasPalabras = (arrayPalabras: string[]) => {
    const frecuencias: { [key: string]: number } = {};

    arrayPalabras.forEach(palabra => {
        if (frecuencias[palabra]) {
            frecuencias[palabra] += 1
        } else {
            frecuencias[palabra] = 1
        }
    })

    const items = Object.entries(frecuencias);

    items.sort((a, b) => b[1] - a[1]);

    const objetoOrdenado = Object.fromEntries(items);

    return objetoOrdenado;
}

export const generateReporte = (texto: string) => {

    const sinsaltos = eliminarSaltosLinea(texto)
    const minusculas = aMinusculas(sinsaltos)
    const sinPuntuacionesNumeros = eliminarPuntuacionesNumeros(minusculas)
    const removedStopWords = quitarStopWordsEspanol(sinPuntuacionesNumeros)
    const frecuencias = frecuenciasPalabras(removedStopWords)
    return {
        contador: removedStopWords.length,
        frecuencias
    }
}