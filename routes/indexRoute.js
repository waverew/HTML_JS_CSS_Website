const express = require('express');
const router = express.Router();
const callback = require('../controllers/indexController.js');
router.get('/', callback.get);
module.exports = router;