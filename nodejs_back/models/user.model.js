const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

var userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: "First name can't be empty",
  },
  lastName: {
    type: String,
    required: "Last name can't be empty",
  },
  address: {
    type: String,
    required: "Address can't be empty",
  },
  phone: {
    type: String,
    required: "Phone can't be empty",
  },
  email: {
    type: String,
    required: "Email can't be empty",
    unique: true,
  },
});

userSchema.path("email").validate((val) => {
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, "Invalid e-mail.");

mongoose.model("User", userSchema);
