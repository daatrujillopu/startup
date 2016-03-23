/**
 * Created by DESARROLLO on 18/03/2016.
 */
var Spotifyv1Model = Backbone.Model.extend({
    defaults: {
        albumName: "",
        imageUrl: "",
    },

    idAttribute: "albumName",

    /*urlRoot: "js/temporalServices/rollingStones.json",
    parse: function(response, options){
        return response.albums.items;
    }*/

});
