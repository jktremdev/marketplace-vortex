import express from "express";
import routes from "./routes/userRoute.js";
import routes from "./routes/adsRoutes.js";

const app = express();

app.use(express.json());


//todas as rotas que começam com /user serão direcionadas para o arquivo userRoute.js
app.use("/user", userRoutes);

//todas as rotas que começam com /anuncios serão direcionadas para o arquivo anuncioRouter.js
app.use("/anuncios", anuncioRoutes);

app.listen(3000, () =>{
    console.log("servidor rodando na porta 3000");
});