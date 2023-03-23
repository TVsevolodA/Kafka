const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const Pool = require('pg').Pool
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.DB_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

const getMessage = async (message) => {
    // pool.query(message)
    const res = await pool.query(message);
    console.log(`connector.get_message() результат из бд: ${JSON.stringify(res.rows)}`);
    // (request, response) => {
    //     response.status(200).json(JSON.stringify(res.rows))
    // }
}

const listDoctors = async (request, response) => {
    response.json({ info: await pool.query('SELECT * FROM doctors;')})
}

module.exports = {
    getMessage,
    listDoctors
}