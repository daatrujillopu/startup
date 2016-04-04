/**
 * Created by danny on 3/04/16.
 */
define([], function () {
    var artistModel = Backbone.Model.extend({
        /*defaults: {
         name: "",
         uri: "",
         },
         idAttribute: "name",*/

        /* url: "js/temporalServices/rollingStones.json",
         parse: function (response) {

         return response.albums;
         }*/

    });

    return artistModel;
});