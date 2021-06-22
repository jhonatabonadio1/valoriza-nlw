import { createConnection } from 'typeorm'

createConnection().then(() => {
  console.log("Conexão com o banco de dados realizada com sucesso")
}).catch(err => {
  console.log(err)
})