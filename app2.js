var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config')(process.argv[2] || 'local');
var session = require('express-session');

app.listen(config.port, function() {
	console.log('Express listening on port ' + config.port);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
//app.engine('ejs', require('ejs').renderFile);

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: process.env.EXPRESS_SECRET || '$#%!@#@@#SSDASAGDJDVV@@@@',
  key: 'sid'
}));

app.get('/', function(req, res) {
  res.render('index.ejs', {
    title: "Rentr.",
    userData: req.session.userData || {}
  });
});

app.post('/action/Login', function(req, res) {
  req.session.userData = {};
  req.session.userData.email = req.body.email;
  console.dir(req.session);
  res.redirect('/');
})

app.post('/action/Upload', function(req, res, next) {
  console.log('got here');
  console.dir(req.body);
  console.log('benjamin is here');
  console.dir(req.files);
  res.redirect('/');
})

app.get('/find', function(req, res) {
  res.render('find.ejs', {
    title: "Rentr - Find Your Apartment."
  });
});

app.get('/upload', function(req, res) {
  res.render('upload2.jade', {
    title: "Rentr - Post Your Apartment."
  });
});

app.get('/about', function(req, res) {
  res.render('about.ejs', {
    title: "About Rentr."
  });
});

app.get('/signup', function(req, res) {
  res.render('signup.ejs', {
    title: "Signup for rentr."
  });
});

app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/', express.static(__dirname + '/bower_components/bootstrap/dist'));

  // app.get('/admin', function(req, res) {
  //   res.render('admin.ejs', {
  //     title: "Admin page. Allow rentr to approve listings."
  //   });
  // });
