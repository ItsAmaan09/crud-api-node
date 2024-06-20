const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Config/db");
const City = require("./city");

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
    cityId: {
      type: DataTypes.INTEGER,
      references: {
        model: City,
        key: "id",
      }
    },
  },
  {
    timestamps: true,
  }
);

// User.belongsTo(City,{foreignKey:'cityId'});
// City.hasMany(User,{foreignKey:'cityId'});

module.exports = User;
