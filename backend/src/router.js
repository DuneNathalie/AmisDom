const express = require("express");

const router = express.Router();

const animauxController = require("./controllers/AnimauxController")

// Route pour récupérer tous les animaux

router.get("/", animauxController.getAllanimaux);
router.get("/:id", animauxController.getByIdanimaux);
//router.post("/", animauxController.createAnimaux);
//router.put("/:id", animauxController.updateAnimaux);
//router.delete("/:id", animauxController.deleteAnimaux);


module.exports = router;