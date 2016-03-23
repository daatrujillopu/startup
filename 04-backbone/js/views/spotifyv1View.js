/**
 * Created by DESARROLLO on 18/03/2016.
 */
define(["text!htmlviews/spotifyv1Template.html", "collections/spotifyv1Collection"],
    function (template, collectSpotifyv1) {
    var spotifyv1View = Backbone.View.extend({
        el: null,
        collSpotify: null,
        dataSpotify: {},
        initialize: function (options) {
            this.el = options.container;
            //this.dataSpotify = new collectSpotifyv1();
            this.render();


            //console.log(template);
            /*this.element = element;
             this.element.innerHTML = template;*/
        },
        render: function () {
            var templateunderscore = _.template(template);
            this.el.innerHTML = templateunderscore({
                username: "Danny",
                apellido: "Trujillo"
            });
        }
    });
    return spotifyv1View;
});