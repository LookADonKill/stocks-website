const portfolioService = require('../services/portfolioService');

function getPortfolio(req, res){
    const data = portfolioService.getPortfolio();
    res.json(data);
}

module.exports = {
    getPortfolio
};