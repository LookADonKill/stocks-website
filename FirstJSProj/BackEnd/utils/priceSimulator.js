let intervalId;

function simulatePriceChanges(stocks) {
    intervalId = setInterval(() => {
        for (let symbol in stocks) {
            let stock = stocks[symbol];
            let changePercent = (Math.random() - 0.5) * 0.02; // Random change between -1% and +1%
            stock.price = Math.max(1, stock.price * (1 + changePercent)); // Ensure price doesn't go below 1
        }
    }, 5000);
}

function stopSimulation() {
    clearInterval(intervalId);
    intervalId = null;
}

module.exports = {
    simulatePriceChanges,
    stopSimulation
}