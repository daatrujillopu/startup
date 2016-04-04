/**
 * Created by danny on 17/03/16.
 */
define(["views/spotifyv1View"], function (spotifyv1) {
    var myRoutes = Backbone.Router.extend({

        routes: {
            "spotifyv1": "onSpotifyurl"
        },

        el: null,

        initialize: function (options) {
            this.el = options.view;
            //console.log(this.el);
        },

        onSpotifyurl: function () {
            //console.log(this.el);
            var view = new spotifyv1({container: this.el});
            //console.log("Enter a la ruta");
        }

    });
    return myRoutes;
});