import { useEffect, useState } from 'react';
import { getStocks } from '../services/api.js';
import StockCard from '../components/stockCard.jsx';

function Home() {
    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const data = await getStocks();
                setStocks(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchStocks();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Stocks</h1>
            
            {stocks.length === 0 ? ( // === has to be exactly the same, since == recognizes 0 and "0" as the same, but it's actually the different types of variable
                <p>No stocks available</p>
            ) : (
                Object.entries(stocks).map(([symbol, stock]) => (
                    <StockCard key={symbol} stock={stock} onBuy={() => setStocks({ ...stocks })} />
                ))
            )}
        </div>
    );
}

export default Home;