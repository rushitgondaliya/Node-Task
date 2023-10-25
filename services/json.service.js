const { json } = require("../models");

/**
 * Create json
 * @param {object} reqBody
 * @returns {Promise<json>}
 */
const createjson = async (reqBody) => {
  return json.create(reqBody);
};

/**
 * Get json list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<json>}
 */
const getjsonList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return json.find(filter).skip(skip).limit(options.limit).select("-password");
};

/**
 * Get json details by id
 * @param {ObjectId} jsonId
 * @returns {Promise<json>}
 */
const getjsonById = async (jsonId) => {
  return json.findById(jsonId);
};

/**
 * json details update by id
 * @param {ObjectId} jsonId
 * @param {object} updateBody
 * @returns {Promise<json>}
 */
const updateDetails = async (jsonId, updateBody) => {
  return json.findByIdAndUpdate(jsonId, { $set: updateBody });
};

/**
 * Delete json
 * @param {ObjectId} jsonId
 * @returns {Promise<json>}
 */
const deletejson = async (jsonId) => {
  return json.findByIdAndDelete(jsonId);
};

module.exports = {
  createjson,
  getjsonList,
  getjsonById,
  updateDetails,
  deletejson,
};
