
// https://scotch.io/tutorials/mean-app-with-angular-2-and-the-angular-cli
// require('dotenv').config();

// grab dependancies
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");

// const methodOverride = require("method-override");

const AWS = require('aws-sdk');

const bodyParser = require('body-parser');

// load modules
const api = require('./routes/routes.js');


// app.set('appPath', '../dist');

// Used for CORS (Cross Origin Resource Sharing)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// configure our application #################################

// tell express where to look for  static assets
// app.use(express.static(path.join(__dirname + "dist")));
app.use(express.static(path.join(__dirname, '../dist')));

// middleware body parsing for dealing with creating events
// app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// app.use(expressValidator());
// // setting up flash messages
// app.use(cookieParser());
// app.use(session({
//     secret: process.env.SECRET,
//     cookie: { maxAge: 60000 },
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(flash());
app.use('/api', api);
app.use(express.static('dist'));

// set the routes ###############################
// app.use(require('./routes/api'));

app.get("*", function(req, res, next){
    // res.sendFile(path.resolve(__dirname, "../dist/index.html"));
    console.log("this just happened");
    res.sendFile(path.join(__dirname, '../dist/index.html'));
    // next();
// }
// ,function(req, res) {

});



// start our server
app.listen(port, () => {
    console.log('App listening on http://localhost:' + port);
})
