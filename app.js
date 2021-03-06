
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var meeting = require('./routes/meeting')
var http = require('http');
var path = require('path');
var User = require('./models/user');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon(__dirname + '/public/images/favicon.ico'));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// setup passport
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Connect mongoose
mongoose.connect('mongodb://localhost/komit');

app.get('/', routes.index);
app.get('/pricing', routes.pricing);
app.get('/login', routes.login);
app.get('/register', routes.register);
app.post('/subscription', routes.subscription);
app.get('/panel', routes.panel);
app.get('/meeting', meeting);
app.get('/setupMeeting', routes.setupMeeting);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
