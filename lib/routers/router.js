$(document).ready(function initializeRouting() {
	
	urlEncodeCharacter = function(c) {
		return '%' + c.charCodeAt(0).toString(16);
	};
	
	urlDecodeCharacter = function(str, c) {
		return String.fromCharCode(parseInt(c, 16));
	};
	
	urlEncode = function( s ) {
	      return encodeURIComponent( s ).replace( /\%20/g, '+' ).replace( /[!'()*~]/g, urlEncodeCharacter );
	};
	
	urlDecode = function( s ) {
	      return decodeURIComponent(s.replace( /\+/g, '%20' )).replace( /\%([0-9a-f]{2})/g, urlDecodeCharacter);
	};
	
	var offset = 0;
	var index = 1;
	
	var DigiRouter = Backbone.Router.extend({
		routes: {
			"artikkeli/:category/:title/:articleId":	"article"
		},
		article: function(category, title, articleId) {
			
			console.log("rendering "+title);
			this.view = new ArticleView;
			this.view.load(category, articleId);
			this.view.render();
			$("#viewport").height($(window).height()-230);

			$("#article-navigation div").mouseenter(function slideDown() {
				$(".category-article-list").slideDown('fast');
			});
			
			$(".category-article-list").mouseleave(function slideUp() {
				$(".category-article-list").slideUp('fast');
			});
			
			$(".category-article-link").click(function openLink() {
				var link = $(this);
				var category = link.attr("data-category-name").toLowerCase();
				var articleId = link.attr("data-article-id");
				var articleTitle = urlEncode(link.html());
				dRouter.openArticle(category, articleTitle, articleId);
			});
			
		},
		openArticle: function(category, title, articleId) {
			this.article(category, title, articleId);
			this.navigate("/artikkeli/"+category+"/"+title+"/"+articleId);
		}
	});
	var dRouter = new DigiRouter();
	Backbone.history.start({pushState: true});
	
	$("#forward").click(function forward() {
		var container = $("#viewport");
		var width = container.width();
		offset += width; 
		index++;
		container.animate({ scrollLeft: offset }, 'slow');
	});
	
	$("#rewind").click(function rewind() {
		var container = $("#viewport");
		var width = container.width();
		offset -= width;
		index--;
		if(offset < 0) {
			offset = 0;
			index = 1;
		}
		container.animate({ scrollLeft: offset }, 'slow');
	});
	
	$(window).resize(function resizeViewport() {
		var container = $("#viewport");
		var width = container.width();
		var totalHeight = $(window).height();
		container.height(totalHeight-230);
		container.scrollLeft(width*(index-1));
		offset = width*(index-1);
	});
	$("#viewport").height($(window).height()-230);
});
