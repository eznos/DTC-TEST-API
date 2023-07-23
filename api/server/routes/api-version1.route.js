const express = require("express");
const router = express.Router();

const { OverViewRoute } = require("./overview.route");

// * APIs Version 1

router.use("/overviews", OverViewRoute);
module.exports.RouteV1 = router;
