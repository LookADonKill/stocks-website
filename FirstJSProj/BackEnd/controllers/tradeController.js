const tradeService = require('../services/tradeService');

function buy(req, res){
    try {
        console.log("BUY CALLED");
        const { symbol, shares } = req.body;
        const updatedPortfolio = tradeService.buyStock(symbol, shares);
        res.json(updatedPortfolio);
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }  
}

function sell(req, res){
    try {
        console.log("SELL CALLED");
        const { symbol, shares } = req.body;
        const updatedPortfolio = tradeService.sellStock(symbol, shares);
        res.json(updatedPortfolio);
    } catch (error) {
        res.status(400).json({ error: error.message }); 
    }  
}

module.exports = {
    buy,
    sell
};