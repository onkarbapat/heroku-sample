var app = app || {};
app.lastpage='';
(function () {
	var did_search=false;
	app.Router = Backbone.Router.extend({

		routes : {
			"search":"searchRoute",
			"":"loadMain",
			"post":"handlePost"
		},

		handlePost: function()
		{
			if (app.lastpage!='')
				app.lastpage.remove();
			$('#main_container').append("<section id='post_recipe'></section>");
			app.lastpage=new app.Post_View({el:$("#post_recipe")});
		},
		
		searchRoute: function ()
		{
			did_search=true;
			console.log("searching");
			//app.landView.remove();
			if (app.lastpage!='')
				app.lastpage.remove();
			if ($('#main_container #search_results').length==0)
				$('#main_container').append("<section id='search_results' class='container'></section>");
			$.ajax({
			    url:"/api/letmecook/indian?i="+app.searchQuery,
			    success: function(data) {
			    	_.each(data,function(mydata){
			    	// 	console.log(mydata);
			    	 	mydata.steps=mydata.steps.replace(/\n/g,"<br/>");
			    	 	console.log(mydata);
			    	 });
			    	app.detailView=new app.DetailsView({el:$('#search_results'),recipes:data});
			    	app.lastpage=app.detailView;
			    },
			    dataType:'json'
			});
		},

		loadMain: function ()
		{
			if (did_search)
				app.detailView.remove();
			if (app.lastpage!='')
				app.lastpage.remove();
			console.log($('#main_container #letscook'));
			console.log("in main ");
			if ($('#main_container #letscook').length==0)
				$('#main_container').append("<section id='letscook' class='page-header'></section>");
			app.landView=new app.LandingView({el:$('#letscook')});
			app.lastpage=app.landView;
		}

	});
	
})();