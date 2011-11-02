var ArticleView = Backbone.View.extend({
    el: $('div[role=main]'),
    articleTemplate: '#article',
	initialize: function() {
		this.article = new Article();
		this.bind('refresh', this.render);
	},
	load: function(category, articleId) {
		var categoryName = category.toUpperCase();
		var articleStub = ARTIKKELIT[categoryName][articleId];
		this.article = new Article;
		this.article.loadData(articleStub);
		var categoryArticles = new Array;
		$.each(ARTIKKELIT[categoryName], function(index, categoryArticle) {
			categoryArticles.push({
				articleId: index,
				active: articleId == index ? ' active' : '',
				title: categoryArticle["otsikko1"] 
			});
		});
		this.article.setCategoryArticles(categoryArticles);
	},
    render: function() {
        this.template = _.template( $(this.articleTemplate).html() );
		this.el.html(this.template({ article: this.article }));
    }
});