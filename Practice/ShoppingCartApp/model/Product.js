const mongooseClient = require('mongoose');

const productSchema = new mongooseClient.Schema({
    name: String,
    price: Number,
    description: String
});

const Product = mongooseClient.model('Product', productSchema);

module.exports=Product;