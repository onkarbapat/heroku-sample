var app = app || {};

(function () {
	app.LandingView = Backbone.View.extend({
		initialize: function(){
			this.render();

			$('#ttip').popover();

			$( "#ingredients" ).autocomplete({
      			//source: app.INGRE
      		source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
	          response( $.ui.autocomplete.filter(
	            app.INGRE.data, app.utils.extractLast( request.term ) ) );
	        },
	        focus: function() {
	          // prevent value inserted on focus
	          return false;
	        },
	        select: function( event, ui ) {
	          var terms = app.utils.split( this.value );
	          // remove the current input
	          terms.pop();
	          // add the selected item
	          terms.push(ui.item.value );
	          // add placeholder to get the comma-and-space at the end
	          terms.push("");
	          this.value = terms.join(",");
	          return false;
	        }
		    });
		},

		render:function(){
			var template = _.template($('#landing_template').html());
			var data = {"sitename":'Let Me Cook'};
			this.$el.html (template(data));
		},

		events:{
			"click #search":"loadSearch",
			"click #ttip":"postmyrecipe"
		},

		postmyrecipe:function()
		{
			console.log("clicking tip");
			$("#ttip_info").toggle();
		},

		loadSearch:function()
		{
			var a=$("#ingredients").val().trim().split(',');
			a.pop();
			console.log(a);
			app.searchQuery=a;
			//$("#ingredients").val().trim().split(',').join(',');
			console.log(app.searchQuery);
				//$("#ingredients").val().trim().split(',').join(','));
			app.router.navigate("search",true);
			app.searchDone=true;
			$.ajax({
			    url:"/api/letmecook/indian?i="+app.searchQuery,
			    success: function(data) {
			    	var new_data;
			    	console.log(data);
			    	 _.each(data,function(mydata){
			    	// 	console.log(mydata);
			    	 	mydata.steps=mydata.steps.replace(/\n/g,"<br/>");
			    	 	console.log(mydata);
			    	 });
			    	console.log(data);
			    	app.detailView=new app.DetailsView({el:$('#search_results'),recipes:data});
			    },
			    dataType:'json'
			});
			
			console.log($("#ingredients").val());

		}

	});
})();