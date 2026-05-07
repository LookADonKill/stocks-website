const express = require('express');
const app = express();
const cors = require('cors');

const stockRoutes = require('./routes/stockRoutes');
const tradeRoutes = require('./routes/tradeRoutes');
const portfolioRoutes = require('./routes/portfolioRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/stock', stockRoutes);
app.use('/api/trade', tradeRoutes);
app.use('/api/portfolio', portfolioRoutes);

module.exports = app;