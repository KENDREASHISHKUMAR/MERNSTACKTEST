const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TravelLog = sequelize.define("TravelLog", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  imageUrl: { type: DataTypes.STRING },
  userId: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = TravelLog;
