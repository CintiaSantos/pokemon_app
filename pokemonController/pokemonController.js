const express = require("express");
const router = express.Router();

const Pokemon = require("../models/pokemon");

// create a brand new pokemon, and then return the added pokemon
router.post("/", (req, res) => {
  const newPokemon = req.body;
  Pokemon.create(newPokemon, (err, pokemon) => {
    if (err) {
      res.status(400).json({ message: err.message });
    } else {
      res.status(201).json({ pokemon });
    }
  });
});

// A request to /pokemons will retrieve all the pokemons
router.get("/", (req, res) => {
  Pokemon.find({}, (error, allPokemons) => {
    if (error) {
      console.error(error);
      res.json({
        error: "an error has occurred",
      });
    } else {
      console.log("success!");
      res.json({
        message: "Success",
        allPokemons: allPokemons,
      });
    }
  });
});

// A request to /pokemon/:name, will retrieve that pokemon by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  Pokemon.findOne({ _id: req.params.id }, (err, pokemon) => {
    if (err) {
      res.status(404).json({ message: err.message });
    } else {
      res.status(200).json(pokemon);
    }
  });
});

// upadate a pokemon
router.put("/:id", (req, res) => {
  Pokemon.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body,
    (error, updatedPokemon) => {
      if (error) {
        console.error(error);
        res.json({
          error: "an error has occurred",
        });
      } else {
        console.log("success!");
        res.json({
          message: "Success",
        });
      }
    }
  );
});

// delete
router.delete("/pokemon/:id", (req, res) => {
  Pokemon.deleteOne({ _id: req.params.id }, (error, deletedPokemon) => {
    if (error) {
      console.error(error);
      res.json({
        error: "an error has occured",
      });
    } else {
      console.log("success");
      res.json({
        message: "Success",
      });
    }
  });
});

module.exports = router;
