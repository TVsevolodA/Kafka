const db = require('./queries')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.get('/doctora', db.getListDoctors)
// app.put('/doctor/:id', db.getDoctorInfo)
app.get('/patients', db.getListPatients)
// app.put('/patient/:id', db.getPatientInfo)
// app.post('/tasks', db.getListPatients)
// app.put('/tasks/:id', db.getPatientInfo)
// app.delete('/tasks/:id', db.deleteTodo)

// Отчеты:
app.get('/numberDoctorAppointments', db.doctorAppointments)
app.get('/numberDoctorAppointmentsDay', db.entriesDay)
app.get('/totalNumberRecords', db.totalNumberEntriesDay)