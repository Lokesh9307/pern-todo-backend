const {Pool} = require("pg");
require('dotenv').config();
const pool = new Pool({
    user:process.env.USERNAME,
    host:process.env.HOST,
    database:process.env.DATABASE_NAME,
    password:process.env.DATABASE_PASSWORD,
    port:5432,
    ssl: {
        rejectUnauthorized: false  // Accept self-signed certificates (optional, depending on your environment)
    }
})


module.exports = pool;