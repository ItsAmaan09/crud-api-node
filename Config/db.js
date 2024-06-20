const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("NodeDB", "sa", "admin@123", {
  host: "localhost",
  dialect: "mssql",
  dialectOptions: {
    options: { encrypt: false, enableArithAbort: true,instanceName: 'SQLEXPRESS' },
  },
  logging: console.log, // Enable logging for debugging
});

sequelize.authenticate().then(()=>{
    console.log('connection established successfully')
}).catch(err =>{
    console.error('unable to connect',err);
});

module.exports = sequelize;
