const mongoose = require('mongoose');

const featuredSchema = new mongoose.Schema({
  img: {
    src: {
      front: String,
      back: String,
    },
    alt: {
      front: String,
      back: String,
    },
  },
  title: String,
  price: {
    old: Number,
    new: Number,
  },
  currency: String,
  link: {
    href: String,
    text: String,
  },
});

const Featureds = mongoose.model("featureds", featuredSchema);

module.exports = Featureds;