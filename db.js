const {Pool} = require("pg");
require('dotenv').config();
const pool = new Pool({
    user:process.env.USERNAME,
    host:"dpg-crv701tds78s73a9m7eg-a",
    database:process.env.DATABASE_NAME,
    password:process.env.DATABASE_PASSWORD,
    port:5432,
    ssl: {
        rejectUnauthorized: false  // Accept self-signed certificates (optional, depending on your environment)
    }
})
pool.connect((err, client, release) => {
    if (err) {
        console.error('Error acquiring client', err.stack);
        return;
    }

    console.log('Connected to PostgreSQL');

    // Here you can perform database operations
    client.query('SELECT NOW()', (err, res) => {
        release(); // Release the client back to the pool

        if (err) {
            console.error('Error executing query', err.stack);
        } else {
            console.log('Current time:', res.rows[0]);
        }
    });
});

module.exports = pool;