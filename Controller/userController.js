const City = require("../Models/city");
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
    // const users = await User.findAll({include:City});
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
    // const user = await User.findOne({ where: { id },include:City });
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
    const { Name, CityId } = req.body;
    const user = await User.create({ Name, CityId });
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
      // const updatedUser = await User.findOne({ where: { id },include:City });
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
    const user = await User.findOne({ where: { id } });
    if (user) {
      user.IsDeleted = true;
      await user.save();
      sendNoContentResponse(res);
    }
    else {
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
