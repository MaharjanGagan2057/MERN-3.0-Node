 // require dotenv
 require('dotenv').config()

  // require express
  const express = require('express')
const connecttodatabase = require('./database')
  const app = express()
 
  // connect to database
connecttodatabase()

app.get('/', (req, res) => {
    res.status(200).json({
    "Message":('Hello  World!')
  })
})

  app.get('/about', (req, res) => {
    res.json({
    "Message":('this is about page')
  })
  })

  // start server, listen to port from env file using process.env.port
  app.listen(process.env.PORT, () => {
    console.log(' node project Server is running on port 3000')
  })  



