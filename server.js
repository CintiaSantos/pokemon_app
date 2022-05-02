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

server.get('/pokemon/:name', (req, res) => {
    let name = req.params.name
    const myPokemon = pokemon.find(obj => obj.name === name)
    res.send(`
    <h2>${myPokemon.name}</h2>
    <img src=${myPokemon.img}.jpg >
    `)
    // res.json(myPokemon)
  })

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})