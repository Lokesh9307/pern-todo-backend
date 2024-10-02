const Pool = require("pg").Pool;
const pool = new Pool({
    user:"todo_database_qy6s_user",
    password:process.env.DATABASE_PASSWORD,
    host:process.env.EXTERNAL_DATABSE_URI,
    database:"todo_database_qy6s",
    port:5432,
})



module.exports = pool;