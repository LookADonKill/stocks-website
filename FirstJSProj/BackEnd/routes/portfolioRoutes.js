const express = require('express');
const portfolioController = require('../controllers/portfolioController.js');
const router = express.Router();

router.get('/', portfolioController.getPortfolio);

module.exports = router;