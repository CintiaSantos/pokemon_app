const express = require("express");
const morgan = require("morgan");
const pokemon = require("./models/pokemon");
const server = express();

// import model
const Pokemon = require("./models/pokemon");

const PORT = process.env.PORT || 3000;

//require mongodb connection
const mongoConfig = require("./config");

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// home route
server.get("/", (req, res) => {
  res.status(200).json({ message: "API UP!" });
});

const pokemonRouter = require("./pokemonControllers/pokemonController");
require("dotenv").config();

server.use("/pokemon", pokemonRouter);

server.listen(PORT, () => {
  mongoConfig();
  console.log(`Server is listening on port ${PORT}`);
});
