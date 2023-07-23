const express = require("express");
const router = express.Router();
const {
  Test
} = require("../controllers/overview.controller");
router.get("/test", async (req, res) => {
    await Test(req, res);
});
module.exports.OverViewRoute = router;
