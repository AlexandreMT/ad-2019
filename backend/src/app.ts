import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { databaseURL } from './config/enviroments/env'
import UserRoutes from './routes/UserRoutes'

class App {
  public express: express.Application

  constructor() {
    this.express = express()

    this.middlewares()
    this.routes()
    this.database()
  }

  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private routes(): void {
    this.express.use([UserRoutes])
  }

  private database(): void {
    mongoose.connect(databaseURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }, (error) => {
      if (!error) console.log('MongoDB connected')
    })
  }
}

export default new App().express
