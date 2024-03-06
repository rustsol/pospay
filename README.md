
POSPAY is an Ethereum-based payment processing system designed to simplify and secure transactions for merchants and customers alike. By leveraging blockchain technology, POSPAY offers a POS (Point of Sale) calculator that generates QR codes for transactions, which incorporate the merchant's Ethereum address, name, and the transaction amount.

Features
POS Calculator: Easily calculate payments and generate QR codes for transactions.
Ethereum Integration: Directly send and receive payments on the Ethereum blockchain.
Smart Contract Support: Utilizes a secure smart contract for payment processing.


Requirements
Node.js (v12.x or later)
npm (v6.x or later)
An Ethereum wallet with testnet or mainnet Ether, depending on your deployment.

Install dependencies:
npm install

Change URL of the RPC and also deploy contract(src/PaymentContract.sol) and put the contract URL the qrGenerator.js for seamless transactions. You can also use contract ABI if necessary.

RUN:
npm start

Use Case:
Making a Transaction
Enter the merchant name, address, and the amount to be paid in the POS calculator.
Generate a QR code that encapsulates the transaction details.
Scan the QR code with an Ethereum wallet app to make the payment.

