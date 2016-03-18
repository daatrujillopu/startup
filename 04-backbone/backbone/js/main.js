requirejs.config({
    baseUrl: 'js/',
    paths: {
        "text" : "vendor/text"
    }
});

requirejs([ 'pocRoutes'],

    function   ( PocRoutes) {

        var sectionContainer = document.getElementById("container"),
            router = new PocRoutes({ view: sectionContainer });

        Backbone.history.start()

    }
);