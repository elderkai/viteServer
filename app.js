var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongooseConnect = require("./config/config")
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let session = require("express-session");
var app = express();
var ejs = require('ejs');
const history = require("connect-history-api-fallback");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.__express);
app.set('view engine', 'html');
app.use(history());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'zhang',
  resave: false,
  saveUninitialized: false, // 是否保存未初始化的会话
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60
  }
}))
app.use('/', indexRouter);
app.use('/users', usersRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;