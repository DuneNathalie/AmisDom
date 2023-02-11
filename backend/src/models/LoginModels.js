const datasource = require("../../database");

const log = (mail) => {
    return datasource.query("SELECT * FROM user WHERE mail=?;", [mail]);
}

module.exports={
log,
} 