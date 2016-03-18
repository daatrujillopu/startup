/**
 * Created by DESARROLLO on 10/03/2016.
 */

var movie = (function(){
    attribute = {
        title: "title",
        director: "director"
    };

    eventsName = {
        ONPLAY: "onplay",
        ONSTOP: "onstop"
    };

    events = {};

    var _dispatchEvent = function (eventName) {
        var event = events[eventName];
        if (!event) {
            console.log("Event Doesn´t exists");
            return
        }

        for (var i = 0; i < event.length; i++) {
            // event[i]();
            console.log(event[i]);
        }
    };

    return {

        addEventListener: function (name, callback) {
            if (!events[name]) {
                events[name] = [];
            }
            events[name].push(callback);
        },

        play: function () {
            console.log("Playing movie" + attribute.title);
            this.dispatchEvent(eventsName.ONPLAY)
        },

        stop: function () {
            console.log("Stopping movie " + attribute.title);
            this.dispatchEvent(eventsName.ONSTOP);
        },

        set: function (attr, value) {
            attribute[attr] = value;
        },
        get: function (attr) {
            return attribute[attr];
        },

        dispatchEvent: _dispatchEvent,

    }
})();


movie.set("title", "Terminator");
movie.set("director", "I Dont Know");
movie.addEventListener("onplay", function(){
    console.log( "Movie is playing ");
});
movie.play();
movie.addEventListener("onstop",  function(){
    console.log( "Movie is stopped ");
});
movie.stop();
movie.addEventListener("onplay",  function(){
    console.log( "Movie is playing ");
});
movie.play();
console.log(movie.events);