const { jsonService } = require("../services");

/** create json */
const createjson = async (req, res) => {
  try {
    const reqBody = req.body;

      console.log(reqBody,'reqBody');

    const json = await jsonService.createjson(reqBody);
    if (!json) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "json create successfully!",
      data: { json },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get json list */
const getjsonList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await jsonService.getjsonList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get json list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get json details by id */
const getjsonDetails = async (req, res) => {
  try {
    const getDetails = await jsonService.getjsonById(req.params.jsonId);
    if (!getDetails) {
      throw new Error("json not found!");
    }

    res.status(200).json({
      success: true,
      message: "json details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** json details update by id */
const updateDetails = async (req, res) => {
  try {
    const jsonId = req.params.jsonId;
    const jsonExists = await jsonService.getjsonById(userId);
    if (!jsonExists) {
      throw new Error("json not found!");
    }

    await jsonService.updateDetails(jsonId, req.body);
    res
      .status(200)
      .json({ success: true, message: "json details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete json */
const deletejson = async (req, res) => {
  try {
    const jsonId = req.params.jsonId;
    const jsonExists = await jsonService.getjsonById(jsonId);
    if (!jsonExists) {
      throw new Error("json not found!");
    }

    await jsonService.deletejson(jsonId);

    res.status(200).json({
      success: true,
      message: "json delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createjson,
  getjsonList,
  getjsonDetails,
  updateDetails,
  deletejson,
};
