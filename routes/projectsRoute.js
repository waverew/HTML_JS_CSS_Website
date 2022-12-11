const express = require('express');
const router = express.Router();
const callback = require('../controllers/projectsController');
router.get('/', callback.get);
module.exports = router;