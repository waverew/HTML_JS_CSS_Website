const express = require('express');
const router = express.Router();
const callback = require('../controllers/profileController.js');
router.get('/', callback.get);
module.exports = router;