

window.ArticleView = Backbone.View.extend({
        el: $('body'),

        render: function() {
            $(this.el).append("<article>");
            $(this.el).append("<header>Testi otsikko</header>");
            $(this.el).append("<time datetime='2011-11-02'>02.11.2011</time>");
            $(this.el).append("Testi uutinen");
            $(this.el).append("</article>");

        }

    });