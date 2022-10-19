const express = require('express')
const connection = require('./config/connection')
const cors = require('cors')

const app = express()

const PORT = process.env.PORT || 5001

//Connect Database
connection()

//Init Middleware

app.use(express.json({ extended: false, limit: '50mb' }))
app.use(cors())
app.use(express.urlencoded({ limit: '50mb' }))

// //Define Routes
// app.use('/api/contact', require('./routes/contactRoute'))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
