const express = require("express");
const { jsonValidation } = require("../../validations");
const { jsonController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create json */
router.post(
  "/create-json",
  validate(jsonValidation.createjson),
  jsonController.createjson
);

/** Get json list */
router.get(
  "/list",
  // validate(jsonValidation.getjsonList),
  jsonController.getjsonList
);

/** Get json details by id */
router.get(
  "/get-details/:jsonId",
  validate(jsonValidation.getDetails),
  jsonController.getjsonDetails
);

/** json details update by id */
router.put(
  "/update-details/:jsonId",
  validate(jsonValidation.updateDetails),
  jsonController.updateDetails
);

/** Delete json */
router.delete(
  "/delete-json/:jsonId",
  validate(jsonValidation.getDetails),
  jsonController.deletejson
);

module.exports = router;
