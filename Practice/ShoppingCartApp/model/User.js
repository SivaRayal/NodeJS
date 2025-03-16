const mongooseClient = require('mongoose');

const userSchema = new mongooseClient.Schema({
    username: String,
    password: String
});
  
const User = mongooseClient.model('User', userSchema);

module.exports=User;