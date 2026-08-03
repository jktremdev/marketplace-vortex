import pg from "pg";
import env from "../config/env.js";

const { Pool } = pg;

const pool = new Pool({
    host: env.database.host,
    port: env.database.port,
    user: env.database.user,
    password: env.database.password,
    database: env.database.name
});

export default pool;