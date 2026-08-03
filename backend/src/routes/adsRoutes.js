import { Router } from "express";
import * as adsController from "../controllers/adsController.js";

const router = Router();

router.get("/", adsController.listarAnuncios);

router.get("/:id", adsController.listarAnuncioPorId);

router.post("/", adsController.criarAnuncio);

router.put("/:id", adsController.atualizarAnuncio);

router.delete("/:id", adsController.deletarAnuncio);

export default router;