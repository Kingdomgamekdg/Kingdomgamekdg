const { Timestamp } = require('bson')
const {Schema, Types,model} = require('mongoose')

const BidOrdersSchema = new Schema({
    contract: {type : String},
    from: {type : Types.ObjectId , ref : 'users'},
    id:  {type : Number},
    list_id:  {type : Types.ObjectId , ref : 'listing-assets'},
    asset  :  {type : Types.ObjectId , ref : 'assets'},
    quantity: {type : Number},
    payment_price: {type : Number},// in token payment
    payment_token:{type : String},
    payment_payment: {type : Number},// in token payment
    expiration: {type : Number},
    time: {type : Date , default : Date.now},
    status: {type : Number },//1 order, 2 accept, 3 cancel
})

module.exports = model('bid-orders', BidOrdersSchema)