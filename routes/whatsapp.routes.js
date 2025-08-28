const express = require('express')
const router = express.Router()
const { sendWhatsapp } = require("../controllers/whatsapp.controller");

router.post("/send", sendWhatsapp);

module.exports = router;