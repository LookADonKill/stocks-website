const BASE_URL = 'http://localhost:3000/api';

export const getStocks = async () => {
    const response = await fetch(`${BASE_URL}/stock`);
    if (!response.ok) {
        throw new Error('Failed to fetch stocks');
    }
    return response.json();
};

export const getPortfolio = async () => {
    const response = await fetch(`${BASE_URL}/portfolio`);
    return response.json();
};

export const buyStock = async (symbol, shares) => {
    const response = await fetch(`${BASE_URL}/trade/buy`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symbol, shares })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to buy stock');
    }
    return response.json();
};

export const sellStock = async (symbol, shares) => {
    const response = await fetch(`${BASE_URL}/trade/sell`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ symbol, shares })
    });
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to sell stock');
    } 
    return response.json();
};


