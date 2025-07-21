const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  image: String,
  title: String,
  stars: { type: Number, min: 0, max: 5 },
  studentsWatched: Number,
  review:Number,
});

module.exports = mongoose.model('Review', reviewSchema);
