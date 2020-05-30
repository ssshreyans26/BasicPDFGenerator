var createError = require('http-errors');
var express = require('express');
var app = express();
  var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const puppeteer = require('puppeteer')
const fs = require('fs-extra')
// const hbs = require('handlebars')
const data =  {name: "Shreyans" , email: "ssshreyans26@gmail.com"}
const moment = require('moment')
const bodyParser = require('body-parser');
var ejs = require('ejs')
var mongoose = require('mongoose');
mongoose.set('useFindAndModify',false); 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



const Person = require("./models/user");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//puppeteer compile function


// hbs.registerHelper('dateFormat', function(value,format){
//   return SVGAnimateMotionElement(value).format(format);
// });
 



mongoose
  .connect(
//'mongodb+srv://admin:admin@cluster0-szwuh.mongodb.net/admin?retryWrites=true&w=majority'
'mongodb://localhost:27017/admin_login'
  )
  .then(result => {
    console.log("Mongodb connection made.")
  })
  .catch(err => {
    console.log(err);
  });
  
  Person.find((err, people) => {
    // Note that this error doesn't mean nothing was found,
    // it means the database had an error while searching, hence the 500 status
    if (err) return res.status(500).send(err)
    // send the list of all people
    console.log(people);
    
}); 



//puppeteer



const schemas = [];
mongoose.modelNames().forEach(function(studentdetail){
    schemas.push(mongoose.model(studentdetail).schema.obj);
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
