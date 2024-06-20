const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Config/db");

const City = sequelize.define(
  "mstCity",
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
    timestamps: true,
  }
);

module.exports = City;
