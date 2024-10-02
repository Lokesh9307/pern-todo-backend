const Pool = require("pg").Pool;
// const pool = new Pool({
//     user:"todo_database_qy6s_user",
//     password:process.env.DATABASE_PASSWORD,
//     host:process.env.EXTERNAL_DATABSE_URI,
//     database:"todo_database_qy6s",
//     port:5432,
// })
const poolConfig = {
    max:5,
    min:2,
    idleTimeoutMillis:600000,
};

poolConfig.connectionString = "postgres://todo_database_qy6s_user:HaXSMVlzIxCkdsBHxOo7AmVAwNErHMQB@dpg-cruont0gph6c73dm8si0-a.oregon-postgres.render.com:5432/todo_database_qy6s"
const pool = new Pool(poolConfig);

module.exports = pool;