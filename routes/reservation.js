const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../helpers/auth");
const mongoose = require("mongoose");
require('../models/Booking')
const Booking = mongoose.model('reserve')
require('../models/Rooms')
const Rooms = mongoose.model('rooms')
router.get("/reservation", ensureAuthenticated,(req, res) => {
Rooms.find({})
 .then(rooms => {
   Booking.findOne({user:req.user.id})
    .then(book => {
      res.render("reservation", {
        rooms:rooms,
        book:book
      });
    })
  
 })
 
});

router.post('/reservation', ensureAuthenticated,(req,res) => {
  const alpha = /^[a-zA-Z]+$/;
  const email = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
  let todate = Date.now() -1
  let errors = []
  if(alpha.test(req.body.firstname) === false) {
      errors.push({text:'please enter corrrect firstname '})
  }
  if(alpha.test(req.body.lastname) === false) {
    errors.push({text:'please enter correct lastname'})
  }
  if(req.body.phone.length >10 || req.body.phone.length < 10 ) {
    errors.push({text:'please enter correct phone number'})
  }
  // if(email.test(req.body.email) === false) {
  //   errors.push({text:'please enter correct email'})
  // }
  if(todate === req.body.from || todate === req.body.to) {
    errors.push({text:'please enter correct date'})
  }
  if(errors.length > 0) {
    res.render('reservation', {
      errors:errors
    })
  } else {
    const book = new Booking({
      user:req.user.id,
      from:req.body.from,
      to:req.body.to,
      room:req.body.room,
      Adults:req.body.Adults,
      Childern:req.body.Children,
      Country:req.body.Country,
      firstname:req.body.firstname,
      lastname:req.body.lastname,
      Address1:req.body.Address1,
      Address2:req.body.Address2,
      Town:req.body.Town,
      email:req.body.email,
      phone:req.body.phone
    })
    book.save()
     .then( () => {
       res.redirect('reservation')
     })
  }
})

router.delete('/reservation', ensureAuthenticated, (req,res) => {
  Booking.findOneAndRemove({user:req.user.id})
   .then(() => {
     req.flash('success_msg','reservation cancelled')
     res.redirect('/reservation')
   } ).catch(err => console.log(err))
})

module.exports = router;
