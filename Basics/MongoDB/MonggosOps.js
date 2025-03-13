var monfoose = require('mongoose')
var dbHoset=""


var bookSchema = mongoose.Schema({
    name: String,
    // also creating index on field isbn
    isbn:{type: String,index: true},
    author: String,
    pages: Number
})

