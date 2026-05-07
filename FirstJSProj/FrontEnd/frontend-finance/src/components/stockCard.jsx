import { useState } from 'react';
import { buyStock, getStocks, sellStock, getPortfolio } from '../services/api.js';

function StockCard({ stock, onBuy }) {
    const [shares, setShares] = useState(0); // default shares is 0
    const [loading, setLoading] = useState(false); // default loading is false
    const [error, setError] = useState(false); // default error is false

    const handleBuy = async (symbol) => {
        setLoading(true);
        setError(null);
        try {
            await buyStock(symbol, shares);
            onBuy(); // refresh portfolio after buying
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    const handleSell = async (symbol) => {
        setLoading(true);
        setError(null);
        try {
            await sellStock(symbol, shares);
            onBuy(); // refresh portfolio after selling
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style= {{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <h3>{stock.name} ({stock.symbol})</h3>
            <p>Current Price: ${stock.price.toFixed(2)}</p>
            <input
            type="number"
            value={shares}
            min="1"
            onChange={(e) => setShares(Number(e.target.value))} // the number will be updated based on input
          />
          <button onClick={() => handleBuy(stock.symbol)} disabled={shares <= 0 || loading}> {loading ? "Buying..." : "Buy"}</button>
          <button onClick={() => handleSell(stock.symbol)} disabled={shares <= 0 || loading}> {loading ? "Selling..." : "Sell"}</button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      );
}

export default StockCard;