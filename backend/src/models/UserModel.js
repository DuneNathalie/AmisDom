const datasource = require("../../database");

// Requête pour récupérer les utilisateurs

const getAllUsers = () => {
  return datasource.query(`SELECT * FROM user`);
};

// Requête pour s'inscrire

const postUser = async (req) => {
  const { email, password} = req.body;

  const request = await datasource.query(
    `INSERT INTO user(email, password) VALUES (?, ?)`,
    [email, password]
  );

  return request;
};

// Post a user that try to log his account
const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;

  datasource.query("SELECT * FROM user WHERE email = ?", [email])
    .then(([users]) => {
      if (users[0] != null) {
        // eslint-disable-next-line prefer-destructuring
        req.user = users[0];

        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

// Requête pour se connecter

module.exports = {
  getAllUsers,
  postUser,
  getUserByEmailWithPasswordAndPassToNext,
};