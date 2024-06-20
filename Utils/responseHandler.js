const sendSuccessResponse = (res, data, message = "Success") => {
  res.status(200).json({ message, data });
};

const sendErrorResponse = (res, error) => {
  res.status(500).json({ error: error.message });
};

const sendNotFoundResponse = (res, message = 'Not Found') => {
  res.status(404).json({ error: message });
};

const sendNoContentResponse = (res) => {
  res.status(204).send();
};

module.exports = {
  sendSuccessResponse,
  sendErrorResponse,
  sendNotFoundResponse,
  sendNoContentResponse
};
