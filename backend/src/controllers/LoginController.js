const {log} =require("../models/LoginModels");
const db = require("../../database");

const postLogin = (req, res) => {
   return log(req.boby.mail)
   .then(res => {

   })
}