/**
 * Created by danny on 17/03/16.
 */

requirejs.config({
    baseUrl: 'js/',
    paths: {
        "text" : "vendor/text"
    }
});

requirejs( [ "router" ], function (  BootcampRouter ){

    var bootRutes = new BootcampRouter();
    Backbone.history.start()

});
