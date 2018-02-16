require('babel-core/register')({
  "presets": ["env", "react", "stage-1"],
});

const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const httpProxy = require('http-proxy');
const requestHandler = require('./requestHandler'); // request handler for server-side rendering

const app = express();

// PROXY TO API
const apiProxy = httpProxy.createProxyServer({
  target: 'http://localhost:3001',
});
app.use('/api', (request, response) => { // drive all request to api
  apiProxy.web(request, response);
});

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

// middleware accepting all client requests
app.set('view engine', 'ejs');
app.use(requestHandler);

// catch 404 and forward to error handler
app.use((request, response, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, request, response, next) => {
  // set locals, only providing error in development
  response.locals.message = err.message;
  response.locals.error = request.app.get('env') === 'development' ? err : {};

  // render the error page
  response.status(err.status || 500);
  response.render('error');
});

module.exports = app;
