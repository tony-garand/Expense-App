const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ExpenseSchema = new Schema({
    id: String,
    description: String,
    amount: Number,
    createdAt: Date,
});

module.exports = mongoose.model('Expenses', ExpenseSchema)