const mongoose = require('mongoose')

// connect to database ,database name is mern-3.0, await is used to wait for database connection,while writting await must write async function
  async function connecttodatabase () {
     await mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('database connected')
    })
    .catch((err) => {
        console.log(err)
    })
}

// export connecttodatabase
module.exports = connecttodatabase