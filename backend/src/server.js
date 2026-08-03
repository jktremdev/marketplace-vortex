import express from "express";
import userRoutes from "./routes/userRoute.js";
import adsRoutes from "./routes/adsRoutes.js";
import env from "./config/env.js";
import db from "./db/connection.js";

const app = express();

app.use(express.json());

// Rotas
app.use("/user", userRoutes);
app.use("/anuncios", adsRoutes);

// Inicia o servidor somente após conectar ao banco
async function startServer() {
    try {
        await db.query("SELECT NOW()");

        console.log("✅ Conectado ao PostgreSQL.");

        app.listen(env.server.port, () => {
            console.log(`🚀 Servidor rodando na porta ${env.server.port}`);
        });

    } catch (error) {
        console.error("❌ Erro ao conectar ao PostgreSQL:");
        console.error(error.message);
        process.exit(1);
    }
}

startServer();