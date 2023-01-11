const express = require('express');
const router = express.Router();
const callback = require('../controllers/dbController.js');
router.get('/', callback.get);
module.exports = router;