const express = require('express');
const router = express.Router();
const callback = require('../controllers/indexController.js');
router.get('/', callback.get);
router.post('/', callback.post);
module.exports = router;