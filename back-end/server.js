const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routesUrls = require('./routes/routes')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, (error, result) =>{
  if (error) {return console.log(error)}
  else console.log("Database connected")
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

app.listen(port, () => {
  console.log(`Code test server listening on port ${port}`)
})