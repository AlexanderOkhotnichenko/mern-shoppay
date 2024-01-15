const mongoose = require('mongoose');

const productsSchema = mongoose.Schema({
  img: {
    src: {
      front: String,
      back: String
    },
    alt: {
      front: String,
      back: String
    },
  },
  title: String,
  price: {
    old: Number,
    new: Number,
  },
  link: {
    href: String,
    text: String,
  },
  size: Array,
  category: String,
  color: String,

});

const Products = mongoose.model('products', productsSchema);

module.exports = Products;