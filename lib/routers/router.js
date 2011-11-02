$(document).ready(function initializeRouting() {
	var DigiRouter = Backbone.Router.extend({
		routes: {
			"artikkeli/:category/:title/:articleId":                 "article",    // #help
		},
		article: function(category, title, articleId) {
			console.log("rendering "+title);
		}
	});
	var dRouter = new DigiRouter();
//	Backbone.history.start({pushState: true});	
});
