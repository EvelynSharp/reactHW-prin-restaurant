const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Princess = new Schema ({
  princessName: {type: String, required:true, unique:true},
  favRest:{
    restName: String,
    priceRange: String,
    cuisine: String,
    description: String,
    rating: Number
  },
  princessReview:{type: String, required:true, unique:true},
  imageURL:{type: String, required:true, unique:true}

});

module.exports = mongoose.model('Princess', Princess)
