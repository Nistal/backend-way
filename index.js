import 'dotenv/config'
import './src/database/connect.js'
import express from "express";
import authRouter from './src/routes/register.routes.js'


const app = express()
const PORT = process.env.DB_URI || 4000

app.use(express.json())
app.use('/api', authRouter)

app.listen(PORT, () => {
    console.log(`Running in ===>>> http://localhost:${PORT}`)
})