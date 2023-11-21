"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.recibirTextoRouter = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const utils_1 = require("../../../utils");
const controller_1 = require("../controller");
const recibirTextoRouter = (0, express_1.Router)();
exports.recibirTextoRouter = recibirTextoRouter;
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
recibirTextoRouter.post(`${utils_1.BASE_API_URL}/normalizar_texto`, upload.single('file'), controller_1.recibirTextoController);
