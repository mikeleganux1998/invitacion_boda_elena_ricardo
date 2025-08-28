const express = require('express');
const router = express.Router();

const whatsappRoutes = require('./whatsapp.routes');

router.use('/whatsapp/', whatsappRoutes);

module.exports = router;