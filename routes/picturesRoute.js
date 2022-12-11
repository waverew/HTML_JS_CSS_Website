const express = require('express');
const router = express.Router();
const callback = require('../controllers/picturesController');
router.get('/', callback.get);
module.exports = router;