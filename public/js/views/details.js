var app = app || {};

(function (){
	app.DetailsView = Backbone.View.extend({
		initialize: function (){
			this.render();
		},

		render: function (){
			var template = _.template($("#recipe_template").html());
			//var data = {recipes:[{"title":"AAA"},{"title":"BBB"},{"title":"CCC"},{"title":"DDD"}]};
			var data = {recipes:this.options.recipes};
			//var data=options.data;
			// _.each(this.options.recipes,function(mydata){
			// 	console.log(mydata);
			console.log(data);
				this.$el.html (template(data));	
			//},this);
			
		}



	});

})();