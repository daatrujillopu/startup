/**
 * Created by danny on 9/03/16.
 */
var Movie = (function (){
    var attribute = {
        title: "title",
        director: "director"
    };
    var eventsName = {
        ONPLAY: "onplay",
        ONSTOP: "onstop"
    };

    var events = {}

    var dispatchEvent = function (eventName) {
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

    return{
        addEventListener: function (name, callback) {
            if (!events[name]) {
                events[name] = [];
            }
            events[name].push(callback);
        },

        dispatchEvent: dispatchEvent,
        
        play: function () {
            dispatchEvent(eventsName.ONPLAY);
        },
        stop: function () {
            dispatchEvent(eventsName.ONSTOP);
        },

        set: function (attribute1, value) {
            attribute[attribute1] = value;
        },
        get: function (attribute1) {
            return attribute[attribute1];
        },

    }

})();

Movie.prototype.DownloadableMovie


Movie.set("title", "Terminator");
Movie.set("director", "I Dont Know");
Movie.addEventListener("onplay", "test1");
Movie.play();
Movie.addEventListener("onstop", "test2");
Movie.stop();
Movie.addEventListener("onplay", "test3");
Movie.play();
console.log(Movie.events);
