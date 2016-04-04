/**
 * Created by DESARROLLO on 18/03/2016.
 */
define(["model/spotifyv1Model"], function (Spotifyv1Model) {
    var spotifyCollection = Backbone.Collection.extend({

        //model: Spotifyv1Model,
        url: "https://api.spotify.com/v1/search?q=artistName&type=album",
        /*info: "",*/

        parse: function(response, xhr){
            return response.albums.items;
        },

        initialize: function (artist) {
            this.url = this.url.replace("artistName", artist);
        }



    });

    return spotifyCollection;
});
