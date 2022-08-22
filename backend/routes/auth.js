const { Enquiry } = require("../Enquiry");
const express = require("express");
// const {thanku}
const router = express.Router();

router.post("/enquiry", Enquiry);
// router.get("/thanku",thanku)

module.exports = router;