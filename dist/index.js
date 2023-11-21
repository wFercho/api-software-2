"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const utils_1 = require("./services/normalizar_texto/utils");
const router_1 = require("./services/normalizar_texto/router");
const utils_2 = require("./utils");
const app = (0, express_1.default)();
app.use(express_1.default.text());
app.use(express_1.default.json());
const HOST_ALLOWED = process.env.HOST_ALLOWED;
if (!HOST_ALLOWED) {
    console.log("NO HAY HOST ESPECIFICADO PARA PERMITIR SU ENTRADA");
}
app.use((0, cors_1.default)({ origin: HOST_ALLOWED }));
const TEXTO_URL = `${utils_2.BASE_API_URL}/texto`;
app.get('/', (req, res) => {
    res.send("<h1>API Taller Software 2</h1>");
});
app.post(`${TEXTO_URL}/normalizar`, (req, res) => {
    try {
        const { content } = req.body;
        let minusculas = (0, utils_1.aMinusculas)(content);
        res.send(minusculas);
    }
    catch (error) {
        console.log(error);
        res.send({ message: "Error procesando solicitud" });
    }
});
app.post(`${TEXTO_URL}/contar_palabras`, (req, res) => {
    try {
        const texto = req.body.content;
        const numero_palabras = (0, utils_1.contarPalabras)(texto);
        res.send("Número de palabras: " + numero_palabras);
    }
    catch (error) {
        console.log(error);
        res.send({ message: "Error procesando solicitud" });
    }
});
app.use(router_1.recibirTextoRouter);
app.listen(process.env.PORT || 4000);
