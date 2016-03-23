/**
 * Created by DESARROLLO on 18/03/2016.
 */
define(["model/spotifyv1Model"], function (Spotifyv1Model) {
    var spotifyCollection = Backbone.Collection.extend({
        //model: Spotifyv1Model,
        url: "js/temporalServices/rollingStones.json",
        parse: function(response){
          return response.albums;
        },
    });

    return spotifyCollection;
});
