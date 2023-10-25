const Joi = require("joi");

/** create person */
const createjson = {
  body: Joi.object().keys({
    first_name: Joi.string().required().trim(),
    last_name: Joi.string().required().trim(),
  }),
};


module.exports = {
    createjson,
};