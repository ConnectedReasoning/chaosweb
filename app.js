const express = require('express');
const compression = require('compression');
const cors = require('cors');
const userAgent = require('express-useragent');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./router');

require('dotenv').config()

const env = process.env.NODE_ENV || 'development';
const app = express();

app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// GZIP all assets
app.use(compression());

app.use(logger('dev'));

var corsOptions = {
  origin: '*', ///aaa.com/,
  allowedHeaders:'Content-Type, Authorization, Content-Length, X-Requested-With',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  methods: 'GET,POST',
}
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))          
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));
app.use(userAgent.express());
app.use(cookieParser());
app.use(express.static(__dirname + '/build'));

app.use('/', routes);

// development error handle will print stacktrace
if (app.get('env') === 'development') {
  app.use((error, req, res, next) => {
    console.log('error was caught in dev error handler. error is ', error);
    res.status(error.status || 500);
    res.json({
      message: error.message,
      error: error
    });
  });
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

// production error handler no stacktraces leaked to user
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message,
    error: {}
  });
});

module.exports = app;
