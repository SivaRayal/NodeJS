const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const mongooseClient = require('mongoose');

const {User}=require('./model/User');
const {Product}=require('./model/Product');
const {Cart}=require('./model/Cart');

// middleware for req resp
app.use(bodyParser.json());

// MongoDB Connect
mongooseClient.connect('mongodb://localhost:27017/shoppingcartDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// User Registration
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  console.log(username);
  console.log(password);
  const user = new User({ username:username, password:password });
  await user.save();
  res.send('User Registration is successfully');
});

// UserLogin
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user && password.equals(user.password)) {
    res.status(200).send('Login Successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// UserLogOut
app.post('/logout', (req, res) => {
  res.send('User logged out successfully');
});

// view Products
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// add to cart
app.post('/cart',async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ userId: req.userId });
  if (!cart) {
    cart = new Cart({ userId: req.userId, products: [{ productId, quantity }] });
  } else {
    const index = cart.products.findIndex(p => p.productId.equals(productId));
    if (index > -1) {
      cart.products[index].quantity += quantity;
    } else {
      cart.products.push({ productId, quantity });
    }
  }
  await cart.save();
  res.send('Product added to cart');
});

// Update Quantity in Cart
app.put('/cart', async (req, res) => {
  const { productId, quantity } = req.body;
  const cart = await Cart.findOne({ userId: req.userId });
  if (cart) {
    const product = cart.products.find(p => p.productId.equals(productId));
    if (product) {
      product.quantity = quantity;
      await cart.save();
      res.send('Cart updated');
    } else {
      res.status(404).send('Product not found in cart');
    }
  } else {
    res.status(404).send('Cart not found');
  }
});

// Remove Product from Cart
app.delete('/cart/:productId', async (req, res) => {
  const { productId } = req.params;
  const cart = await Cart.findOne({ userId: req.userId });
  if (cart) {
    cart.products = cart.products.filter(p => !p.productId.equals(productId));
    await cart.save();
    res.send('Product removed from cart');
  } else {
    res.status(404).send('No Items in cart');
  }
});

// Checkout
app.post('/checkout', async (req, res) => {
  const cart = await Cart.findOne({ userId: req.userId });
  if (cart && cart.products.length > 0) {
    await Cart.deleteOne({ userId: req.userId });
    res.send('Checkout successful');
  } else {
    res.status(400).send('No Items in cart');
  }
});

// Start Server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
