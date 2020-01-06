var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const puppeteer = require('puppeteer')
const fs = require('fs-extra')
// const hbs = require('handlebars')
const data =  {name: "Shreyans" , email: "ssshreyans26@gmail.com"}
const moment = require('moment')
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.set('useFindAndModify',false); 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ejs = require('ejs')
var app = express();

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
const compile = async function(templateName, data) {
  const filePath = path.join(process.cwd(),'views' , 'index.ejs');
  const html = await fs.readFile(filePath, 'utf-8');
  return ejs.compile(html)(data);
}

// hbs.registerHelper('dateFormat', function(value,format){
//   return SVGAnimateMotionElement(value).format(format);
// });



mongoose
  .connect(
//'mongodb+srv://admin:admin@cluster0-szwuh.mongodb.net/admin?retryWrites=true&w=majority'
'mongodb://localhost:27017/generate-pdf'
  )
  .then(result => {
    console.log("Mongodb connection made.")
  })
  .catch(err => {
    console.log(err);
  });


//puppeteer
(async function(){
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const content = await compile('index' , data);
    await page.setContent(content)
    await page.emulateMedia('screen')
    await page.pdf({
      path:'mypdf.pdf',
      format:'A4',
      printBackground:true
    });
    console.log("done")
    await browser.close();
    process.exit();
  }catch (e) {
    console.log('our error', e);
  }
})();

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
