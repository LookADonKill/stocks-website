const app = require('./app');
const priceSimulator = require('./utils/priceSimulator');
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

priceSimulator.simulatePriceChanges();
