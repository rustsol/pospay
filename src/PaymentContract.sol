// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PaymentContract {
    event PaymentReceived(address from, uint amount, string merchantName, string transactionId);

    function pay(string memory merchantName, string memory transactionId) public payable {
        require(msg.value > 0, "Can't pay with zero amount");
        emit PaymentReceived(msg.sender, msg.value, merchantName, transactionId);
    }

    // Function to withdraw the contract balance to a wallet
    function withdraw(address payable _to) public {
        _to.transfer(address(this).balance);
    }
}
