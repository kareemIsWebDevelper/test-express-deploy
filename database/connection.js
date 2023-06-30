var mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.connect(process.env.MONGO_URI, options)
.then((res) => console.log("Connected"))
.catch((error) => console.log(error));
 
module.exports = mongoose;