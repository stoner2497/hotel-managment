const express = require("express");
const path = require("path");
const exhb = require("express-handlebars");
const session = require("express-session");
const mongoose = require("mongoose");
const passport = require("passport");
const flash = require("connect-flash");
const bodyParser = require("body-parser");
const app = express();

app.use(
  session({
    secret: "Stonned",
    resave: true,
    saveUninitialized: true
  })
);

//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);
//flash middleware
app.use(flash());
//local variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.user = req.user || null;
  next();
});
app.use(
  session({
    secret: "Stonned",
    resave: true,
    saveUninitialized: true
  })
);

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contactus", (req, res) => {
  res.render("contactus");
});

// static path for CSS, Images and JS
app.use("/public", express.static(path.join(__dirname, "/public")));

//mongoose connection
const db = require("./config/keys").mongoURI;
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(console.log(`mongodb connected`))
  .catch(err => console.log(err));

//setting middleware
app.engine(
  "handlebars",
  exhb({
    defaultLayout: "main"
  })
);
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
const user = require("./routes/user");
const Restro = require("./routes/restro");
const Rooms = require("./routes/rooms");
const Reserve = require("./routes/reservation");
app.use("/", Rooms, Restro, Reserve, user);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
