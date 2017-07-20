var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;


//connect to mongodb
var url = 'mongodb://localhost:27017/mass_transit';
mongoose.connect(url);
var db =mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected correctly');
});


//Agofure routes
var agm_users = require('./routes/agm_users');
var agm_passengers = require('./routes/agm_passengers');
var bus_routes = require('./routes/bus_routes');

//general
var users = require('./routes/users');
var passengers =require('./routes/passengers');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//passport config
// var User = require('./models/user');
// app.use(passport.initialize());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser((User.serializeUser()));
// passport.deserializeUser((User.deserializeUser()));
//
//agm_user passport config
var agmUser = require('./models/agm_user');
app.use(passport.initialize());
passport.use(new LocalStrategy(agmUser.authenticate()));
passport.serializeUser((agmUser.serializeUser()));
passport.deserializeUser((agmUser.deserializeUser()));


// app.use('/users', users);
// app.use('/passengers', passengers);

//Agofure app.use
app.use('/agm_users',agm_users);
app.use('/agm_passengers',agm_passengers);
app.use('/bus_routes', bus_routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
