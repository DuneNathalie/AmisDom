const datasource = require("../datasource");
const anim = "animaux";

const getAllanimaux = () => {
  return datasource.query (`SELECT * FROM ${anim}`);
  
}

const getByIdanimaux = (id) => {
  return datasource.query (`SELECT * FROM ${anim} WHERE id_animaux=?`, [id]);
}

const getAllType = async (req, res) => {
  const [result] = await db.query("SELECT DISTINCT type FROM animaux");
  return res.status(200).send(result);
};
/*const createAnimaux = () => {
  return datasource.query ("INSERT INTO ${anim} (type, name, gabarit, age, descriptif, image) VALUE (? ,? ,? ,?, ?, ?), [type, name, gabarit, age, description, image]");
}

const updateAnimaux = () => {
  return datasource.query ("UPDATE ${anim} SET type=?, name=?, gabarit=?, age=?, descriptif=?, image=?, animauxId=?, WHERE id=?", [type, name, gabarit, age, descriptif, image, animauxId, id]);
}

const deleteAnimaux = () => {
  return datasource.query ("DELETE FROM ${anim} WHERE id=?", [id]);
}*/

module.exports = {
  getAllanimaux,
  getByIdanimaux,
  getAllType,
  /*createAnimaux,
  updateAnimaux,
  deleteAnimaux,*/
}
