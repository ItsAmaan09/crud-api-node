const express = require('express');
const sequelize = require('./Config/db');
const userRoutes = require('./Routes/userRoutes.js');
const app = express();

app.use(express.json());


app.use('/api/user',userRoutes);

app.get('/',(req,res)=>{
    res.send('Hello from nodejs');
});


sequelize.sync().then(()=>{
    console.log('DB and table created');
});


app.listen(3000,()=>{
    console.log('server is running ');
})