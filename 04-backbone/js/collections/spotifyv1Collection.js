/**
 * Created by DESARROLLO on 18/03/2016.
 */
define(["model/spotifyv1Model"], function (Spotifyv1Model) {
    var spotifyCollection = Backbone.Collection.extend({

        model: Spotifyv1Model,
        url: "js/temporalServices/rollingStones.json",

        parse: function (response) {
            //console.log(response.albums.items)
            return response.albums.items;
        },
    });

    return spotifyCollection;
});
