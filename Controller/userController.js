const User = require("../Models/user");
const {
  sendSuccessResponse,
  sendErrorResponse,
  sendNotFoundResponse,
  sendNoContentResponse,
} = require("../Utils/responseHandler");

// get all user ----
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    sendSuccessResponse(res, users);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// get user by id ----
const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (user) {
      sendSuccessResponse(res, user);
    } else {
      sendNotFoundResponse(res, "User not found");
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// create an user ----
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    sendSuccessResponse(res, user);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// update an user ----
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await User.update(req.body, { where: { id } });
    if (updated) {
      const updatedUser = await User.findOne({ where: { id } });
      sendSuccessResponse(res, updatedUser);
    } else {
      sendNotFoundResponse(res, "User not found");
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

// delete a user -----
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await User.destroy({ where: { id } });
    if (deleted) {
      sendNoContentResponse(res);
    } else {
      sendNotFoundResponse(res, "User not found");
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
