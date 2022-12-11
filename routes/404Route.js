const express = require('express');
const router = express.Router();
const callback = require('../controllers/404Controller');
router.get('/', callback.get);
module.exports = router;