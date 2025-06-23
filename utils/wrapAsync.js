module.exports = (fn) =>{
 return (req,res,next) => {
 fn(req,res,next).catch(next);
 };
};


// // https://chatgpt.com/c/67cbd33c-e320-8007-a0e5-5b7d795bba80


// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;
// app.use(bodyParser.json());

// // Sample in-memory database for user balances
// let accounts = {
//     'user1': { balance: 1000 },
//     'user2': { balance: 500 }
// };

// // Fund transfer API
// app.post('/transfer', (req, res) => {
//     const { from, to, amount } = req.body;

//     if (!accounts[from] || !accounts[to]) {
//         return res.status(400).json({ message: 'Invalid account' });
//     }

//     if (amount <= 0) {
//         return res.status(400).json({ message: 'Amount must be greater than zero' });
//     }

//     if (accounts[from].balance < amount) {
//         return res.status(400).json({ message: 'Insufficient balance' });
//     }

//     // Perform transfer
//     accounts[from].balance -= amount;
//     accounts[to].balance += amount;

//     res.json({ message: 'Transfer successful', accounts });
// });

// // Get account balance
// app.get('/balance/:user', (req, res) => {
//     const user = req.params.user;
//     if (!accounts[user]) {
//         return res.status(400).json({ message: 'Invalid account' });
//     }
//     res.json({ user, balance: accounts[user].balance });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

// Here's a simple fund transfer application in JavaScript using Node.js and Express. It includes:

// A basic API to transfer funds between accounts
// Validation for sufficient balance
// A simple in-memory database (object) to store user balances

// Steps to Run:
// Install dependencies: npm install express body-parser
// Run the server: node server.js
// Use Postman or any API testing tool to send a transfer request.


// This is a simple fund transfer API built using Node.js and Express. You can test it using Postman or cURL by sending a POST request to /transfer with a JSON body:

// json
// Copy
// Edit
// {
//     "from": "user1",
//     "to": "user2",
//     "amount": 200
// }
// Let me know if you need any modifications! 





// const express = require('express');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000;
// app.use(bodyParser.json());

// // Sample in-memory database for user balances
// let accounts = {
//     'user1': { balance: 1000 },
//     'user2': { balance: 500 }
// };

// const transferCharge = 10; // Fixed charge for each transfer

// // Fund transfer API
// app.post('/transfer', (req, res) => {
//     const { from, to, amount } = req.body;

//     if (!accounts[from] || !accounts[to]) {
//         return res.status(400).json({ message: 'Invalid account' });
//     }

//     if (amount <= 0) {
//         return res.status(400).json({ message: 'Amount must be greater than zero' });
//     }

//     const totalDeduction = amount + transferCharge;

//     if (accounts[from].balance < totalDeduction) {
//         return res.status(400).json({ message: 'Insufficient balance to cover transfer and charges' });
//     }

//     // Perform transfer
//     accounts[from].balance -= totalDeduction;
//     accounts[to].balance += amount;

//     res.json({ message: 'Transfer successful', charge: transferCharge, accounts });
// });

// // Get account balance
// app.get('/balance/:user', (req, res) => {
//     const user = req.params.user;
//     if (!accounts[user]) {
//         return res.status(400).json({ message: 'Invalid account' });
//     }
//     res.json({ user, balance: accounts[user].balance });
// });

// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
