const stocks  = require('../models/stockModel');

function getStocks(){
    return stocks;
}

module.exports = {
    getStocks
};