const stocks = require('../models/stockModel');

function initSocket(io){
    setInterval(() => {
        stocks.forEach(stock => { 
            stock.price += (Math.random() - 0.5) * 0.1; // Ensure price doesn't go below 1
        });
        io.emit('stockUpdate', stocks);
    }, 2000); // Simulate price changes every 2 seconds
}

module.exports = {
    initSocket
};