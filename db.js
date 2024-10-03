const {Pool} = require("pg");
require('dotenv').config;
const pool = new Pool({
    user:process.env.USERNAME,
    host:process.env.HOST,
    database:process.env.DATABASE_NAME,
    password:process.env.DATABASE_PASSWORD,
    port:5432,
})


module.exports = pool;