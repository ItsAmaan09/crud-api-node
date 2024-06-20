const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Config/db");

const User = sequelize.define(
  "User1",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
