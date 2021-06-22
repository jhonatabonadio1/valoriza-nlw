import express from 'express'
import "reflect-metadata"

import { router } from './routes'

import "./database"

const app = express();

app.use(router)
app.use(express.json())

app.listen(3333, () => {
  console.log("Servidor iniciado")
})