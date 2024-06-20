const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Config/db");

const City = sequelize.define(
  "mstCity",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IsDeleted:{
      type:DataTypes.BOOLEAN,
      defaultValue:false
    }
  },
  {
    timestamps: true,
  }
);

module.exports = City;
