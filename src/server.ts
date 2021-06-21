import express from 'express'

const app = express();

app.get("/", (req, res) => {
  return res.send("Ola mundo!")
})

app.post("/post", (req, res) => {
  return res.send("Postado!")
})

app.listen(3333, () => {
  console.log("Servidor iniciado")
})