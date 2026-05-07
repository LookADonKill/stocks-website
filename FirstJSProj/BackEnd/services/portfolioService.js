const portfolio  = require('../models/portfolioModel');

function getPortfolio(){
    return portfolio;
}

function addStock(symbol, shares) {
    const existing = portfolio.find(s => s.symbol === symbol);
    if (existing) {
        existing.shares += shares;
    } else {
        portfolio.push({ symbol, shares });
    }

    return portfolio;
}

module.exports = {
    getPortfolio,
    addStock
};