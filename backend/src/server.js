import express from "express";
<<<<<<< HEAD
import userRoutes from "./routes/userRoute.js";
import adsRoutes from "./routes/adsRoutes.js";
import env from "./config/env.js";
import db from "./db/connection.js";
=======
import routes from "./routes/userRoute.js";
import routes from "./routes/adsRoutes.js";
>>>>>>> af699ae11209dab954d1af19912a7131a46df3dc

const app = express();

app.use(express.json());

<<<<<<< HEAD
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
=======

//todas as rotas que começam com /user serão direcionadas para o arquivo userRoute.js
app.use("/user", userRoutes);

//todas as rotas que começam com /anuncios serão direcionadas para o arquivo anuncioRouter.js
app.use("/anuncios", anuncioRoutes);

app.listen(3000, () =>{
    console.log("servidor rodando na porta 3000");
});
>>>>>>> af699ae11209dab954d1af19912a7131a46df3dc
