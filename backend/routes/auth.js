const { Enquiry } = require("../Enquiry");
const express = require("express");
const router = express.Router();

router.post("/enquiry", Enquiry);

module.exports = router;