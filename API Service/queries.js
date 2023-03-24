const producer = require('./producer');
const http = require('http');

const getListDoctors = (request, response) => {
    const options = {
        hostname: 'data_service',
        port: 4000,
        path: '/doctors',
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

// const getDoctorInfo = (request, response) => {
//     const id = parseInt(request.params.id)

//     producer.run(`SELECT * FROM doctors WHERE id = ${id};`);
//     // consumer.run();
//     const res = consumer.run();
//     response.status(200).json(res);
// }
  
const getListPatients = (request, response) => {
    producer.run('SELECT * FROM patients;');
    // consumer.run();
    // const res = consumer.run();
    response.status(200).json();

    // const { patients } = request.body

    // pool.query('INSERT INTO todo (todo) VALUES ($1);', [todo], (error, results) => {
    //     if (error) {
    //         throw error
    //     }
    //     response.status(201).send(`Todo added with ID: ${results.insertId}`)
    // })
}

// const getPatientInfo = (request, response) => {
//     const id = parseInt(request.params.id)

//     producer.run(`SELECT ${id} FROM patients;`);
//     const res = consumer.run();
//     response.status(200).json(res);
//     // const { patient } = request.body

//     // pool.query(
//     //     'UPDATE todo SET todo = $2 WHERE id = $1',
//     //     [id, todo],
//     //     (error, results) => {
//     //     if (error) {
//     //         throw error
//     //     }
//     //     response.status(200).send(`Todo modified with ID: ${id}`)
//     //     }
//     // )
// }

// const deleteTodo = (request, response) => {
//     const id = parseInt(request.params.id)

//     pool.query('DELETE FROM todo WHERE id = $1', [id], (error, results) => {
//         if (error) {
//             throw error
//         }
//         response.status(200).send(`Todo deleted with ID: ${id}`)
//     })
// }

// Отчеты
const doctorAppointments = (request, response) => {
    const options = {
        hostname: 'data_service',
        port: 4000,
        path: '/doctorAppointments',
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

const entriesDay = (request, response) => {
    const options = {
        hostname: 'data_service',
        port: 4000,
        path: '/doctorAppointmentsDay',
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

const totalNumberEntriesDay = (request, response) => {
    const options = {
        hostname: 'data_service',
        port: 4000,
        path: '/records',
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

module.exports = {
    // sendClient,
    getListDoctors,
    // getDoctorInfo,
    getListPatients,
    // getPatientInfo,
    // deleteTodo,

    doctorAppointments,
    entriesDay,
    totalNumberEntriesDay,
}