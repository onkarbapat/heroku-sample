var app = app || {};

(function()
{
	app.utils = app.utils || {};
	app.utils.split=function (val) {
    	return val.split( /,\s*/ );
	}

	app.utils.extractLast=function ( term ) {
		return app.utils.split( term ).pop();
	}
})();