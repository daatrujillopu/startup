/**
 * Created by DESARROLLO on 18/03/2016.
 */

define([], function () {
    var Spotifyv1Model = Backbone.Model.extend({
        defaults: {
            name: "",
            images: "",
        },
        idAttribute: "albumName",

       /* url: "js/temporalServices/rollingStones.json",
        parse: function (response) {

            return response.albums;
        }*/

    });

    return Spotifyv1Model;
});

