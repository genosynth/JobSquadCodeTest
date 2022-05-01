const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const routesUrls = require('./routes/routes')
const path = require("path")

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, (error, result) =>{
  if (error) {return console.log(error)}
  else console.log("Database connected")
})




app.use(express.static(path.join(__dirname + "/public")))

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)

app.listen(port, () => {
  console.log(`Code test server listening on port ${port}`)
})