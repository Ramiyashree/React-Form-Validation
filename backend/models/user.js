const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  phonenumber: {
    type: Number
  },
  aaadhar: {
    type: String
  },
  pancard: {
    type: String
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', userSchema)
