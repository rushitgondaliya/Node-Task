const { personService } = require("../services");

/** create person */
const createperson = async (req, res) => {
  try {
    const reqBody = req.body;
    const person = await personService.createperson(reqBody);
    if (!person) {
      throw new Error("Something went wrong, please try again or later!");
    }

    res.status(200).json({
      success: true,
      message: "person create successfully!",
      data: { person },
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get person list */
const getpersonList = async (req, res) => {
  try {
    const { search, ...options } = req.query;
    let filter = {};

    if (search) {
      filter.$or = [
        { first_name: { $regex: search, $options: "i" } },
        { last_name: { $regex: search, $options: "i" } },
      ];
    }

    const getList = await personService.getpersonList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get person list successfully!",
      data: getList,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};


module.exports = {
    createperson,
    getpersonList
}
