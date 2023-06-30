const mongoose = require("mongoose"); 

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    requried: true
  },
  desc: {
    type: String,
    requried: true
  }
}, {timestamps: true});
  
const Category = mongoose.model('category', categorySchema);

module.exports = Category