const express = require('express');
const { generatePOSData } = require('./posCalculator');
const { generateQR } = require('./qrGenerator');

const app = express();
const port = 3000;

app.use(express.static('views')); // Serve static files from the 'views' directory
app.use(express.json()); // Middleware to parse JSON bodies

app.post('/generate-qr', async (req, res) => {
    const { merchantName, address, amount } = req.body;
    const posData = generatePOSData(merchantName, address, amount);
    try {
        const qrCode = await generateQR(posData);
        res.send({ qrCode });
    } catch (error) {
        res.status(500).send('Error generating QR code');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
