const mongoose = require('mongoose');
const Schema = mongoose.Schema

const wishSchema = new Schema(
    {
        name: String,
        price: Number,
        image:String,
        description: String,
    },{timestamps: true})

    module.exports = mongoose.model('Wish', wishSchema)