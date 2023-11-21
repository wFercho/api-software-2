"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recibirTextoController = void 0;
const utils_1 = require("../utils");
const recibirTextoController = (req, res) => {
    var _a, _b;
    const header = req.headers["content-type"];
    try {
        if (req.headers["content-type"] == "text/plain") {
            const texto = req.body;
            if (typeof texto == "string") {
                const reporte = (0, utils_1.generateReporte)(texto);
                res.status(200).send(reporte);
                return;
            }
            res.status(400).send({ message: "no hay contenido valido en el archivo" });
            return;
        }
        if ((_a = req.headers["content-type"]) === null || _a === void 0 ? void 0 : _a.includes("multipart/form-data")) {
            const texto = (_b = req.file) === null || _b === void 0 ? void 0 : _b.buffer.toString("utf-8");
            if (texto) {
                const reporte = (0, utils_1.generateReporte)(texto);
                res.status(200).send(reporte);
                return;
            }
            res.status(400).send({ message: "no hay contenido en el archivo" });
            return;
        }
        res.status(400).send({ message: "no recibido" });
        return;
    }
    catch (error) {
        console.log({ error });
        res.status(400).send({ message: "error inesperado" });
        return;
    }
};
exports.recibirTextoController = recibirTextoController;
