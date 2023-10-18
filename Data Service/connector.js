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
    const res = await pool.query(message);
    console.log(`connector.getMessage(). Запрос ${res} выполнен.`)
}

const listDoctors = async (request, response) => {
    response.json({ info: await pool.query('SELECT * FROM doctors;')})
}

// Отчеты
const doctorAppointments = async (request, response) => {
    response.json({ info: await pool.query('SELECT COUNT(doctor), doctor FROM records GROUP BY doctor;')})
}

const doctorAppointmentsDay = async (request, response) => {
    response.json({ info: await pool.query('SELECT COUNT(date_admission), date_admission, doctor FROM records GROUP BY date_admission, doctor ORDER BY doctor, date_admission;')})
}

const records = async (request, response) => {
    response.json({ info: await pool.query('SELECT COUNT(date_admission), date_admission FROM records GROUP BY date_admission ORDER BY date_admission;')})
}

module.exports = {
    getMessage,
    listDoctors,
    doctorAppointments,
    doctorAppointmentsDay,
    records,
}