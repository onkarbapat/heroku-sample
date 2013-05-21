var app = app || {};

(function (){

	var searchTemplate = "<h1>Let Me Cook</h1>";
	app.SearchView=Backbone.View.extend({
		initialize : function(){
			this.render();
		},
		render:function () {

			var template = _.template(searchTemplate);
			console.log ("Page 2 ")
		}
	});

})();