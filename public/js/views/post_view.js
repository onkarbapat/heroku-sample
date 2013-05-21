var app = app || {};

(function () {
	app.Post_View = Backbone.View.extend({
		initialize: function()
		{
			this.render();
		},

		render: function()
		{
			var template=_.template($("#post_template").html());

			this.$el.html (template());
		}
	});
})();