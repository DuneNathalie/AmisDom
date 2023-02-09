const express = require("express");

const router = express.Router();

const animauxController = require("./controllers/AnimauxController")

// Route pour récupérer tous les animaux

router.get("/", animauxController.getAllanimaux);
router.get("/:id", animauxController.getByIdanimaux);
router.get("/type/type", animauxController.getAllType);
router.delete("/:id", animauxController.deleteAnimaux);
//router.post("/", animauxController.createAnimaux);
//router.put("/:id", animauxController.updateAnimaux);


module.exports = router;