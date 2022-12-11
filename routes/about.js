const express = require('express');
const router = express.Router();
const callback = require('../controllers/aboutController.js');
router.get('/', callback.get);
module.exports = router;