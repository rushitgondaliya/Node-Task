const { person } = require("../models");

/**
 * Create person
 * @param {object} reqBody
 * @returns {Promise<person>}
 */
const createperson = async (reqBody) => {
  return person.create(reqBody);
};

/**
 * Get person list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<person>}
 */
const getpersonList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return person.find(filter).skip(skip).limit(options.limit).select("-password");
};

module.exports = {
    createperson,
    getpersonList
};