const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");

const sequelize = require("../config/db");

const User = sequelize.define("User", { 
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }, 
  updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }, 

  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
});

module.exports = User;
