// Pull in required dependencies

// Pull in required dependencies
var express = require('express');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
// Requirement for method-override for post route
var methodOverride = require('method-override');

var PORT = process.env.PORT || 8080;

var app = express();

// Static content
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Set view engine as handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Import routes
var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });