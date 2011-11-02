var Article = Backbone.Model.extend({
});

var ArticleList = Backbone.Collection.extend({
model: Article,
url: '/artikkeli'
});
