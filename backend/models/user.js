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
  aadharno: {
    type: Number
  },
  education: {
    type: String
  },
  keyskills: {
    type: String
  },
  experience: {
    type: Number
  },
  password: {
    type: String
  }


}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', userSchema)
