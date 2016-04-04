    /**
     * Created by danny on 3/04/16.
     */
    define(["models/searchArtistModel"], function (Spotifyv1Model) {
        var artistCollection = Backbone.Collection.extend({

            url: "https://api.spotify.com/v1/search?q=artistName&type=artist",

            parse: function(response, xhr){
                return response.artists.items;
            },

            initialize: function (artist) {
                this.url = this.url.replace("artistName", artist);
            }

        });

        return artistCollection;
    });