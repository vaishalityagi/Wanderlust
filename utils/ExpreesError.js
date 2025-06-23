class ExpressError extends Error{
    constructor(statusCode,message){
        super();
        this.statusCode =  statusCode;
        this.message =  message;
    }
    
}
module.exports =  ExpressError;
// Here's a MongoDB schema for handling fund transfers between accounts. This schema includes users, accounts, and transaction records.



// {
//     "_id": ObjectId, 
//     "fromAccountId": ObjectId, 
//     "toAccountId": ObjectId, 
//     "amount": Number, 
//     "currency": "USD", 
//     "status": "pending", 
//     "createdAt": ISODate, 
//     "updatedAt": ISODate
//   }
// {
//     "_id": ObjectId,
//     "name": "John Doe",
//     "email": "john@example.com",
//     "phone": "+123456789",
//     "createdAt": ISODate
//   }
//   {
//     "_id": ObjectId,
//     "userId": ObjectId,
//     "accountNumber": "1234567890",
//     "balance": 5000.00,
//     "currency": "USD",
//     "createdAt": ISODate,
//     "updatedAt": ISODate
//   }
//   {
//     "_id": ObjectId,
//     "fromAccountId": ObjectId,
//     "toAccountId": ObjectId,
//     "amount": 100.00,
//     "currency": "USD",
//     "status": "completed", 
//     "transactionType": "transfer",
//     "createdAt": ISODate,
//     "updatedAt": ISODate
//   }
//   const mongoose = require('mongoose');

// const transactionSchema = new mongoose.Schema({
//     fromAccountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
//     toAccountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
//     amount: { type: Number, required: true },
//     currency: { type: String, default: 'USD' },
//     status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now }
// });

// const Transaction = mongoose.model('Transaction', transactionSchema);

// module.exports = Transaction;
