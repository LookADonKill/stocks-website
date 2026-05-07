const stockService = require('../services/stockService');

function getAllStocks(req, res) {
    try {
        const stocks = stockService.getStocks();
        res.json(stocks);
    } catch (error) {
        res.status(500).json({ error: error.message }); 
    }
}

module.exports = {
    getAllStocks
};