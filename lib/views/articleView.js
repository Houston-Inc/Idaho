

var ArticleView = Backbone.View.extend({
    el: $('#main'),

    initialize: function () {

        this.render();


    },
    render: function () {
        //            $(this.el).append("<article>");
        //            $(this.el).append("<header>Testi otsikko</header>");
        //            $(this.el).append("<time datetime='2011-11-02'>02.11.2011</time>");
        //            $(this.el).append("Testi uutinen");
        //            $(this.el).append("</article>");

        var template = _.template($("#articleTemplate").html(), {});

        this.el.html(template);

    }

});