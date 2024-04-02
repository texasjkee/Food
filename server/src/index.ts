import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'

const PORT = process.env.PORT

const server = express()
server.use(express.json())
server.use(cors())

server.get('/', (req: Request, res: Response) => {
  // res.json({ message: 'yo' })
  res.send('yo')
})

const start = async () => {
  try {
    await mongoose
      .connect(process.env.MONGODB_CONNECTION_STRING as string)
      .then(() => console.log('Connected to mongoDB'))

    server.listen(PORT, () => console.log(`Server running on ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
