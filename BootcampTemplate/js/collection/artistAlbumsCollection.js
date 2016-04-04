/**
 * Created by danny on 3/04/16.
 */
define([], function () {
    var artistAlbumCollection = Backbone.Collection.extend({

        url: "https://api.spotify.com/v1/artists/{id}/albums",

        parse: function(response, xhr){
            console.log(response.items);
            return response.items;
        },

        initialize: function (artistid) {
            this.url = this.url.replace("{id}", artistid);
        }

    });

    return artistAlbumCollection;
});
