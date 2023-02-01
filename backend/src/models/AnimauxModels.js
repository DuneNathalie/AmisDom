const db = require("../connection");

const typeAnim = "animaux";

// Requête pour récupérer tous les véhicules

const findAll = () => {
  return db.query(`SELECT * FROM ${typeAnim}`);
};

// Requête pour trouver un animal selon son id
const findVehicleById = (id) => {
  return db.query(`SELECT * FROM ${typeAnim} WHERE id_vehicle=?`, [id]);
};

module.exports = {
  findAll,
  findVehicleById,
};
