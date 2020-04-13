let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let userSchema = require('../models/User');

// CREATE Student
router.route('/create-user').post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});


module.exports = router;
