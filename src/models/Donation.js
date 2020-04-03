const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new mongoose.Schema({
  responsible: {
    type: String,
    default: 'nie podano!',
  },
  helper: {
    type: String,
    default: 'nie podano!',
  },
  world: {
    type: String,
    default: 'nie podano!',
  },
  congregation: {
    type: String,
    default: 'nie podano!',
  },
  time: {
    type: String,
  },
});
const Donation = mongoose.model('Donation', donationSchema);
module.exports = Donation;
