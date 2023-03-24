const connector = require('./connector')
const consumer = require('./consumer')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000

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
  console.log('Запрос получен!');
  response.json({ info: 'Node.js, Data Service API' });
})

// app.get('/id', connector.test)
app.get('/doctors', connector.listDoctors)
// app.put('/doctor/:id', connector.select)
// app.get('/patients', connector.select)
// app.put('/patient/:id', connector.select)

app.get('/doctorAppointments', connector.doctorAppointments)
app.get('/doctorAppointmentsDay', connector.doctorAppointmentsDay)
app.get('/records', connector.records)

consumer.run()