
var express = require("express");
var _ = require("underscore");
var RecipeDAO = require ("./recipeDAO.js").RecipeDAO;
var app = express();
var fs = require('fs');
//app.engine('html', require('ejs').renderFile);
//app.set('views', __dirname + '/views');
app.use(express.logger());
app.use('/static', express.static(__dirname + '/public'));
app.use(express.bodyParser());
var recipedao= RecipeDAO.init();


app.get('/', function(request, response) {	
	//response.json(RecipeDAO.getRecipe());
  	fs.readFile(__dirname + '/public/index.html',function (err, data){
  		console.log(err);
        response.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        response.write(data);
        response.end();
    });
});

app.get('/api/letmecook/:style', function(request, response) {

	if (request.query.i===undefined)
	{
		response.json(RecipeDAO.getRecipe());
	}
	else
	{
	  var ingredients = request.query.i;
	  console.log(ingredients);
	  
	  RecipeDAO.searchRecipe(ingredients.split(','),function(recipes)
	  {	
	  	console.log("getting data")
	  	response.json('200',recipes);
	  });

	  console.log("Aync sent");
	}
  
});

app.post('/api/letmecook', function(request,response){
	console.log(request.body);
	RecipeDAO.addRecipe(request.body);
	response.send(200,request.body);

});	

app.get ('/api/ingredients',function(request,response){
	var op={};
	var ing=new RecipeDAO().getIngredients();
	op.data=ing;
	console.log(op);
	response.json('200',op);

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});