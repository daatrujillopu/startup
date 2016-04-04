/**
 * Created by danny on 3/04/16.
 */
define([], function () {
    var albumSearchAlbum = Backbone.Collection.extend({

        url: "https://api.spotify.com/v1/search?q={string}&type=album",

        parse: function(response, xhr){
            return response.albums.items;
        },

        initialize: function (artist) {
            this.url = this.url.replace("{string}", artist);
        }

    });

    return albumSearchAlbum;
});