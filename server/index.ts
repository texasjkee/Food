require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = process.env.PORT

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  // res.json({ message: 'yo' })
  res.send('yo')
})

const start = async () => {
  try {
    await mongoose
      .connect('mongodb://127.0.0.1:27017/Food')
      .then(() => console.log('Connected to mongoDB'))

    app.listen(PORT, () => console.log(`Server running on ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
