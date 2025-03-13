const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("travel_log_db", "root", "mysql", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
