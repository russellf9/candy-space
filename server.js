var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 8080; // set our port
var staticdir = process.env.NODE_ENV === 'production' ? 'dist.prod' : 'dist.dev'; // get static files dir

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // parse application/json

//app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/' + staticdir)); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./devServer/routes')(app); // configure our routes


//var posts
var _posts = {};


// more routes for our API will happen here

var router = express.Router(); // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!'});
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// gets the posts
app.get('/posts', function(req,res){
    res.json(_posts);
});

// USING A PLUGIN TO TRANSFORM THE CSV DATA -------------------------------
// Using `csvtojson` to generate A JSON object
//Converter Class
var Converter=require("csvtojson").core.Converter;
var fs=require("fs");


// TODO need a correct path structure for the data
var csvFileName="./data/post-data.csv";
var fileStream=fs.createReadStream(csvFileName);
//new converter instance
var param={delimiter:'|', checkType:true};
var csvConverter=new Converter(param);

//end_parsed will be emitted once parsing finished
csvConverter.on("end_parsed",function(jsonObj){
    _posts = jsonObj;
});

//read from file
fileStream.pipe(csvConverter);

// start app ===============================================
app.listen(port);                                     // startup our app at http://localhost:8080
console.log('Starting sever on port ' + port);       // shoutout to the user
exports = module.exports = app;                      // expose app