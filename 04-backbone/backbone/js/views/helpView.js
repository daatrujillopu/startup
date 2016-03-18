define  (["text!views/help.template"], function (tmpl) {

    var helpView = Backbone.View.extend({

        events: {
            //"click .js-sample" : "onClick"
        },
        template: Handlebars.compile(tmpl),


        initialize: function() {
            this.render()
        },

        render: function() {
            var htmlText = this.template ();
            this.$el.html( htmlText );
            this.$el.find(".js-sample").on("click", onClick);
        },

        onClick: function (e){
            e.stopPropagation();
            e.preventDefault();
            console.log("click on sample in help view")

        }

    });


    return helpView;

});