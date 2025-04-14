  const express = require('express')
  const app = express()

app.get('/', (req, res) => {
    res.json({
    "Message":('Hello  World!')
  })
})

  app.get('/about', (req, res) => {
    res.json({
    "Message":('this is about page')
  })
  })

  app.listen(3000, () => {
    console.log(' node project Server is running on port 3000')
  })  