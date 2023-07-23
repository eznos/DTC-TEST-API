const express = require("express");
const router = express.Router();
const {
  AllProduct
} = require("../controllers/overview.controller");
router.get("/products", async (req, res) => {
    await AllProduct(req, res);
});
module.exports.OverViewRoute = router;
