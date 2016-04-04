/**
 * Created by danny on 3/04/16.
 */
define([], function () {
    var albumSongCollection = Backbone.Collection.extend({

        url: "https://api.spotify.com/v1/albums/{id}/tracks",

        parse: function(response, xhr){
            return response.items;
        },

        initialize: function (albumid) {
            this.url = this.url.replace("{id}", albumid);
        }

    });

    return albumSongCollection;
});
