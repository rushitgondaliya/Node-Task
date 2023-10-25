const express = require("express");
const { personValidation } = require("../../validations");
const { personController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create person */
router.post(
  "/create-person",
  validate(personValidation.createperson),
  personController.createperson
);

/** Get person list */
router.get(
  "/list",
  validate(personValidation.getpersonList),
  personController.getpersonList
);

module.exports = router;
