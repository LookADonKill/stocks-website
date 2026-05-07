import { useEffect,useState } from 'react';
import { getPortfolio, buyStock, sellStock } from '../services/api';

function Portfolio() {
  const [portfolio, setPortfolio] = useState({ balance: 0, holdings: [] });

  useEffect(() => {
    const fetchPortfolio = async () => {
      const data = await getPortfolio();
      setPortfolio(data);
    };
    fetchPortfolio();
  }, []);

  return (
    <div>
      <h1>Your Portfolio</h1>
      <p>Balance: ${Number(portfolio.balance || 0).toFixed(2)}</p>
      {Object.keys(portfolio.holdings).length === 0 ? (
        <p>You don't own any stocks</p>
      ) : (
        <ul>
          {Object.entries(portfolio.holdings).map(([symbol, shares]) => (
            <div key={symbol}>
              {symbol}: {shares.shares} shares
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Portfolio;