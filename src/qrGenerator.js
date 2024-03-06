const Web3 = require('web3');
const web3 = new Web3('YOUR_RPC_URL');
const contractABI = [/* ABI here */];
const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function sendPayment(fromAddress, privateKey, merchantName, transactionId, amount) {
    const amountInWei = web3.utils.toWei(amount.toString(), 'ether');
    const tx = contract.methods.pay(merchantName, transactionId);
    const gas = await tx.estimateGas({from: fromAddress});
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(fromAddress, 'latest');
    const signedTx = await web3.eth.accounts.signTransaction(
        {
            to: contractAddress,
            data,
            gas,
            gasPrice,
            nonce,
            value: amountInWei,
        },
        privateKey
    );
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    return receipt;
}

module.exports = { sendPayment };
