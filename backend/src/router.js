const express = require("express");

const router = express.Router();
//const { hashPassword, verifyPassword, verifyToken } = require("./auth");


const userController = require("./controllers/UserController");
const userModel = require("./models/UserModel");
const animauxController = require("./controllers/AnimauxController")
// Route pour récupérer tous les animaux

router.get("/", animauxController.getAllanimaux);
router.get("/:id", animauxController.getByIdanimaux);
router.get("/type/type", animauxController.getAllType);
router.get("/users", userController.getUsers);
router.delete("/:id", animauxController.deleteAnimaux);
//router.post("/user", userController.postLogin);

router.post("/", animauxController.postAnimaux);
//Route pour la création d'un utilisateur
//router.post("/signin", hashPassword, userController.signInUser);

//router.put("/:id", animauxController.updateAnimaux);

// Route pour se logger :
/*router.post(
    "/login",
    userModel.getUserByEmailWithPasswordAndPassToNext,
    verifyPassword
  );*/


module.exports = router;