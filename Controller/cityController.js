const City = require("../Models/city");
const {
  sendSuccessResponse,
  sendNoContentResponse,
  sendNotFoundResponse,
  sendErrorResponse,
} = require("../Utils/responseHandler");

// get all city:-
const getCities = async (req, res) => {
  try {
    const cities = await City.findAll();
    sendSuccessResponse(res, cities);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const getCity = async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findOne({ where: { id } });
    if (city) {
      sendSuccessResponse(res, city);
    } else {
      sendNotFoundResponse(res, "City not found");
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const createCity = async (req, res) => {
  try {
    const city = await City.create(req.body);
    sendSuccessResponse(res, city);
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const updateCity = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await City.update(req.body, { where: { id } });
    if (updated) {
      const updatedCity = await City.findOne({ where: { id } });
      sendSuccessResponse(res, updatedCity);
    } else {
      sendNotFoundResponse(res, "City not found");
    }
  } catch (error) {
    sendErrorResponse(res, error);
  }
};

const deleteCity = async(req,res)=>{
  try {
    const {id} = req.params;
    const deleted = await City.destroy({where:{id}});
    if(deleted){
      sendNoContentResponse(res);
    } else {
      sendNotFoundResponse(res,'City not found')
    }
  } catch (error) {
    sendErrorResponse(res,error)
  }
}

module.exports = {
  getCities,
  createCity,
  getCity,
  updateCity,
  deleteCity
};
