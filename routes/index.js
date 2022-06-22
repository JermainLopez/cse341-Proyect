/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();

router.use('/recipes', require('./recipes'));

module.exports = router;