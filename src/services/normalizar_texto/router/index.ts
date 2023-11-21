import { Router } from "express";
import multer from 'multer'

import { BASE_API_URL } from "../../../utils";
import { recibirTextoController } from "../controller";

const recibirTextoRouter = Router()

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

recibirTextoRouter.post(`${BASE_API_URL}/normalizar_texto`, upload.single('file'), recibirTextoController)



export { recibirTextoRouter }