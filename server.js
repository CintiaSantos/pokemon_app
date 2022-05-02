const express = require('express')
const pokemon = require('./models/pokemon')
const server = express()
const PORT = process.env.PORT || 3000

server.use(express.json())
server.get('/', (req, res) => {
  res.send("<h1>Welcome to the Pokemon App!</h1>")
})

server.get('/pokemon', (req, res) => {
    res.json(pokemon)
  })

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})