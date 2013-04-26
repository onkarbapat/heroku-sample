var express = require("express");
var RecipeDAO = require ("./recipeDAO.js").RecipeDAO;
var app = express();
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.use(express.logger());
app.use('/static', express.static(__dirname + '/public'));
app.use(express.bodyParser());

var recipe = new RecipeDAO();

app.get('/', function(request, response) {	
	recipe.init();
  	response.render('index.html');
});

app.get('/api/letmecook/:style', function(request, response) {
  
  var ingredients = request.query.i;
  console.log(ingredients);
  var recipedao= new RecipeDAO();
  recipedao.getRecipe(ingredients.split(','),function(recipes)
  {	
  	response.json('200',recipes);
  })
  
});

app.post('/api/letmecook', function(request,response){
	console.log(request.body);
	response.send(200,request.body);
});	

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});