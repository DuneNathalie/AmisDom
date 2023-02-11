const express = require("express");

const router = express.Router();

const animauxController = require("./controllers/AnimauxController")
const loginController = require("./controllers/LoginController")
// Route pour récupérer tous les animaux

router.get("/", animauxController.getAllanimaux);
router.get("/:id", animauxController.getByIdanimaux);
router.get("/type/type", animauxController.getAllType);
router.delete("/:id", animauxController.deleteAnimaux);
router.post("/login", loginController.postLogin);
//router.post("/", animauxController.createAnimaux);
//router.put("/:id", animauxController.updateAnimaux);


module.exports = router;