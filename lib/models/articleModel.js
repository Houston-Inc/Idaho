var Article = Backbone.Model.extend({
	loadData: function(articleStub) {
		console.log(articleStub);
		this.header = articleStub["otsikko1"];	
		this.ingress = articleStub["ingressi"];
		this.content = articleStub["sisalto"];
		this.category = articleStub["realcat"];
	},
	setCategoryArticles: function(categoryArticles) {
		this.categoryArticles = categoryArticles;
	},
	getCategory: function() {
		return this.category;
	},
	getHeader: function() {
		return this.header;
	},
	getIngress: function() {
		return this.ingress;
	},
	getImage: function() {
		return "";
	},
	getContent: function () {
		return this.content;
	}
});

var ArticleCollection = Backbone.Collection.extend({
	model: Article,
	//url: '/artikkeli'
	initialize: function() {
		
	}
});
