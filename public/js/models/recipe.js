var app = app || {};

(function  () {
	app.Recipe = Backbone.Model.extend({
		defaults: {
			title:'',
			ingredients:[],
			likes:0
		},

		plusOne:function () {
			this.likes++;
		}
	});
})();