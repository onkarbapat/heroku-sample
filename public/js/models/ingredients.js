var app = app || {};

(function ()
{
	$.ajax({
			    url:"/api/ingredients",
			    success: function(data) {
			    	app.INGRE=data;
			    	console.log(data);
			    },
			    dataType:'json'
			});
})();