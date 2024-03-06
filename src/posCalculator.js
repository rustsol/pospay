function generatePOSData(merchantName, address, amount) {
    return {
        merchantName,
        address,
        amount
    };
}

module.exports = { generatePOSData };