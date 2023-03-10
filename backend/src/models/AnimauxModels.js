const datasource = require("../../database");
const anim = "animaux";

const getAllanimaux = () => {
  return datasource.query (`SELECT * FROM ${anim}`);
  
}

const getByIdanimaux = (id) => {
  return datasource.query (`SELECT * FROM ${anim} WHERE id_animaux=?`, [id]);
}

const getAllType = async (req, res) => {
  const [result] = await datasource.query("SELECT DISTINCT type FROM animaux");
  return res.status(200).send(result);
};

const postAnimaux = async (req) => {
  const {type, name, sexe, age, descriptif, image} = req.body;

  const request = await datasource.query(
    `ÌNSERT INTO animaux(type, name, sexe, age, descriptif, image) VALUES (?,?,?,?,?)`,
    [type, name, sexe, age, descriptif, image]
  );
  return request;
}

const deleteAnimaux = (id) => {
  return datasource.query ("DELETE FROM animaux WHERE id_animaux=?", [id]);
}
const createAnimaux = () => {
  return datasource.query ("INSERT INTO ${anim} (type, name, gabarit, age, descriptif, image) VALUE (? ,? ,? ,?, ?, ?), [type, name, gabarit, age, description, image]");
}

const updateAnimaux = () => {
  return datasource.query ("UPDATE ${anim} SET type=?, name=?, gabarit=?, age=?, descriptif=?, image=?, animauxId=?, WHERE id=?", [type, name, gabarit, age, descriptif, image, animauxId, id]);
}


module.exports = {
  getAllanimaux,
  getByIdanimaux,
  getAllType,
  postAnimaux,
  createAnimaux,
  deleteAnimaux,
  updateAnimaux,
}
