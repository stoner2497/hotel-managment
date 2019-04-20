module.exports = validator = (req, res, next) => {
  const errors = [];
  if (!req.body.roomtype) {
    errors.push[{ error: "please enter roomtype" }];
    console.log("plese eneter roomtype");
  }
  if (!req.body.roomtotal) {
    errors.push[{ error: "please enter roomtype" }];
    console.log("plese eneter roomtype");
  }
  if (!req.body.roomphoto) {
    errors.push[{ error: "please enter roomtype" }];
    console.log("plese eneter roomtype");
  }
  if (!req.body.Price) {
    errors.push[{ error: "please enter roomtype" }];
    console.log("plese eneter roomtype");
  }
  if (!req.body.available) {
    errors.push[{ error: "please enter roomtype" }];
    console.log("plese eneter roomtype");
  }
  if (errors.length > 0) {
    res.render("addrooms", {
      errors: errors,
      roomtype: req.body.roomtype,
      roomtotal: req.body.roomtotal,
      roomphoto: req.body.roomphoto,
      Price: req.body.Price,
      available: req.body.available
    });
  } else {
    console.log("something is wrong here!!");
  }
};
