/**
 * Created by DESARROLLO on 18/03/2016.
 */
define (["text!htmlviews/spotifyv1.html"], function(template){
    var spotifyv1View = Backbone.View.extend({
        el: null,
        initialize: function (options) {
            this.el = options.container;
            this.render();
            //console.log(template);
            /*this.element = element;
            this.element.innerHTML = template;*/
        },
        render: function(){
            this.el.innerHTML = template;
        }
    });
    return spotifyv1View;
});