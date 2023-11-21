import { Request, Response } from "express"
import { aMinusculas, contarPalabras, generateReporte } from "../utils"

export const recibirTextoController = (req: Request, res: Response) => {
    const header = req.headers["content-type"]
    try {
        if (req.headers["content-type"] == "text/plain") {
            const texto = req.body
            if (typeof texto == "string") {
                const reporte = generateReporte(texto)
                res.status(200).send(reporte)
                return

            }
            res.status(400).send({ message: "no hay contenido valido en el archivo" })
            return
        }

        if (req.headers["content-type"]?.includes("multipart/form-data")) {
            const texto = req.file?.buffer.toString("utf-8");

            if (texto) {
                const reporte = generateReporte(texto)
                res.status(200).send(reporte)
                return
            }
            res.status(400).send({ message: "no hay contenido en el archivo" })
            return
        }

        res.status(400).send({ message: "no recibido" })
        return


    } catch (error) {
        console.log({ error });

        res.status(400).send({ message: "error inesperado" })
        return
    }
}