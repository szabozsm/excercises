import 'reflect-metadata'
import express from 'express'
import helmet from 'helmet'

import dotenv from 'dotenv'
import { errorHandler } from './middleware/errorHandler'
import diagRoutes from './routes/diagRoutes'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

// Security middleware
app.use(helmet())

app.use(express.json({ limit: '10kb' }))

// Routes
app.use('/api/v1/health', diagRoutes)

// Global error handling
app.use(errorHandler)

  app.listen(port, () => {
      console.log(`Server running on port ${port} in ${process.env.NODE_ENV} mode`)
    })