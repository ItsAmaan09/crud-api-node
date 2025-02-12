const express = require("express");

const router = express.Router();

const { getUsers, getUser, createUser,updateUser,deleteUser } = require("../Controller/userController.js");

router.get("/",getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;