const producer = require('./producer');
const http = require('http');

function sendRequest (pathDS) {
  (request, response) => {
    const options = {
      hostname: 'data_service',
      port: 4000,
      path: pathDS,
      method: 'GET'
    }
    const req = http.request(options, (res) => {
      console.log(`statusCode: ${res.statusCode}`)
      res.on('data', (d) => {
          const res = JSON.parse(d)
          response.status(200).json(res.info.rows)
      })
    })
    req.on('error', (error) => {
      console.error(error)
    })
    req.end()
  }
}

const getListDoctors = () => {
  sendRequest('/doctors')
}
  
const getListPatients = (request, response) => {
    producer.run('SELECT * FROM patients;');
    response.status(200).json();
}

// Отчеты
const doctorAppointments = () => {
  sendRequest('/doctorAppointments')
}

const entriesDay = () => {
  sendRequest('/doctorAppointmentsDay')
}

const totalNumberEntriesDay = () => {
  sendRequest('/records')
}

module.exports = {
    getListDoctors,
    getListPatients,
    doctorAppointments,
    entriesDay,
    totalNumberEntriesDay,
}