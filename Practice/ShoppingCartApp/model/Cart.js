const mongooseClient = require('mongoose');

const cartSchema = new mongooseClient.Schema({
  userId: mongooseClient.Schema.Types.ObjectId,
  products: [
    {
      productId: mongooseClient.Schema.Types.ObjectId,
      quantity: Number
    }
  ]
});

const Cart = mongooseClient.model('Cart', cartSchema);

module.exports=Cart;