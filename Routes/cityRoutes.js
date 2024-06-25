const express = require("express");
const router = express.Router();

const { getCities, getCity, createCity, updateCity, deleteCity } = require("../Controller/cityController.js");

// middleware:-
router.use((req,res,next)=>{
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

// router.get('/city',(req,res,next)=>{
//     req.time = new Date().toString();
//     console.log({"time":req.time});
//     next();
// },
//     function (req,res){
//         // res.json({"time":req.time});
//     }
// );

router.get("/", getCities);

router.get("/:id", getCity);

router.post("/", createCity);

router.put("/:id", updateCity);

router.delete("/:id",deleteCity);

module.exports = router;