const express = require("express");

const router = express.Router();

// Import des controllers :

const animauxController = require("./controllers/VehicleController");

// Route pour récupérer tous les animaux

router.get("/animaux", animauxController.getAllAnimaux);

router.get("/animaux/:id", animauxController.getAnimauxById);


module.exports = router;
