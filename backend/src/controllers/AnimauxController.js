const AnimauxModels = require("../models/AnimauxModels");
const db = require("../datasource");

const getAllanimaux = async (req, res) => {
  const [result] = await db.query("SELECT * FROM animaux");
  return res.status(200).send(result);
};

const getAllType = async (req, res) => {
  const [result] = await db.query("SELECT DISTINCT type FROM animaux");
  return res.status(200).send(result);
};
// Get animaux by id
/*
const getByIdanimaux = async (req, res) => {
  const [result] = await db.query(
    "SELECT * FROM animaux WHERE id_animaux = ?",
    [req.params.id]
  );
  return res.status(200).send(result);
};*/

const getByIdanimaux = (req, res) => {
  const id = parseInt(req.params.id, 10);

  AnimauxModels.getByIdanimaux(id)
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

const deleteAnimaux = async (req, res) => {
  try{
      const [result] = await AnimauxModels.deleteAnimaux(req.params.id)
          if(result.affectedRows > 0){
              return res.status(201).send(result)
          }}catch(err){
              console.error(err)
              return res.status(500).send("erreur")
  }
};


module.exports = {
  getAllanimaux,
  getByIdanimaux,
  getAllType,
  deleteAnimaux,
};
