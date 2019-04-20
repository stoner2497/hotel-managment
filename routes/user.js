const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const bcrypt = require("bcryptjs");

require("../models/User");
const User = mongoose.model("Admin");

//global var for this route
const alph = /^[a-zA-Z]+$/;
const email = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "reservation",
    failureRedirect: "login",
    failureFlash: true
  })(req, res, next);
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  let errors = [];
  if (alph.test(req.body.name) === false) {
    errors.push({ text: "please enter name in alphatec format" });
  }
  if (email.test(req.body.email) === false) {
    errors.push({ text: "please enter correct email" });
  }
  if (errors.length > 0) {
    console.log(errors);
    res.render("register", {
      errors: errors,
      name: req.body.name,
      email: req.body.email
    });
  } else {
    console.log(req.body);
    const newuser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    bcrypt.genSalt(10, (salt, err) => {
      if (err) throw err;
      bcrypt.hash(newuser.password, salt, (err, hash) => {
        newuser.password = hash;
        newuser.save().then(() => {
          req.flash("success_msg", "successfully registerd");
          res.redirect("login");
        });
      });
    });
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  req.flash("success_msg", "you are logged out");
  res.redirect("login");
});
module.exports = router;
