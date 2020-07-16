const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports.register = (req, res, next) => {
  var user = new User();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.address = req.body.address;
  user.phone = req.body.phone;
  user.email = req.body.email;
  user.save((err, doc) => {
    if (!err) res.send(doc);
    else {
      if (err.code == 11000)
        res.status(422).send(["Duplicate email adrress found."]);
      else return next(err);
    }
  });
};
