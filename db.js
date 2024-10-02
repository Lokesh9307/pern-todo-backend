const Pool = require("pg").Pool;
const pool = new Pool({
    user:"todo_database_qy6s_user",
    password:process.env.DATABASE_PASSWORD,
    host:"dpg-cruont0gph6c73dm8si0-a.render.com",
    database:"todo_database_qy6s",
    port:5432,
    ssl: { rejectUnauthorized: false }
})

module.exports = pool;