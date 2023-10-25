const express = require("express");

const tokenRoutes = require("./token.route");
const userRoute = require("./user.route");
const jsonRoute = require("./json.route");
const personRoute = require("./person.route");

const router = express.Router();

router.use("/token", tokenRoutes);
router.use("/user", userRoute);
router.use("/json", jsonRoute);
router.use("/person", personRoute);

module.exports = router;
