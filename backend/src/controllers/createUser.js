import { Router } from "express";

const router = Router();

router.get("/user", (req, res) => {
    res.send("rota de teste");
});





export default router;