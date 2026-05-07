const stocks = require('../models/stockModel');
const portfolio = require('../models/portfolioModel');
const orders = require('../models/orderModel');

function buyStock(symbol, shares){
    shares = Number(shares);
    if(!Number.isInteger(shares) || shares <= 0) 
        throw new Error('Invalid share quantity');

    const stock = stocks[symbol];

    if (!stock) 
        throw new Error('Stock not found');

    const cost = stock.price * shares;
    
    if(portfolio.balance < cost) throw new Error('Insufficient balance');

    portfolio.balance -= cost;

    const holding = portfolio.holdings[symbol];
    if (holding) {
        holding.shares += shares;
    } else {
        portfolio.holdings[symbol] = { shares };
    }

    orders.push({
        type: 'buy',
        symbol,
        shares,
        price: stock.price,
        date: new Date()   
    });

    return portfolio;
}

function sellStock(symbol, shares){
    shares = Number(shares);
    if(!Number.isInteger(shares) || shares <= 0) 
        throw new Error('Invalid share quantity');
    
    const stock = stocks[symbol];
    if (!stock) 
        throw new Error('Stock not found');

    const holding = portfolio.holdings[symbol];
    if (!holding) throw new Error('No holdings for this stock');

    if(holding.shares < shares) throw new Error('Not enough shares to sell');

    portfolio.balance += stock.price * shares;
    
    holding.shares -= shares;

    if(holding.shares === 0){
        delete portfolio.holdings[symbol];
    }

    orders.push({
        type: 'sell',
        symbol,
        shares,
        price: stock.price,
        date: new Date()   
    });

    return portfolio;
}

module.exports = {
    buyStock,
    sellStock
};
