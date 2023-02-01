const AnimauxModel = require("../models/AnimauxModel");

const getAllAnimaux = (req, res) => {
  AnimauxModel.findAll()
    .then(([animaux]) => {
      res.status(200).send(vehicles);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Internal server error");
    });
};

// Get vehicles by id

const getAnimauxById = (req, res) => {
  const id = parseInt(req.params.id, 10);

  AnimauxModel.findAnimauxById(id)
    .then(([animaux]) => {
      if (animaux[0] != null) {
        res.status(200).send(animaux);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getAllAnimaux,
  getAnimauxById,
};
