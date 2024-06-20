const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Config/db");
const City = require("./city");

const User = sequelize.define(
  "User1",
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
    CityId: {
      type: DataTypes.INTEGER,
      references: {
        model: City,
        key: "Id",
      },
    },
    IsDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
  },
  {
    timestamps: true,
  }
);

// User.belongsTo(City,{foreignKey:'cityId'});
// City.hasMany(User,{foreignKey:'cityId'});

module.exports = User;
