/**
 * Created by DESARROLLO on 8/03/2016.
 */
function Movie() {
    this.attribute = {
        title: "title",
        director: "director"
    };

    this.eventsName = {
        ONPLAY: "onplay",
        ONSTOP: "onstop"
    };

    this.events = {};

}

function DownloadedMovie(){
    this.countDownloaded = 0;
}



Movie.prototype = {
    constructor: Movie,

    addEventListener: function (name, callback) {
        if (!this.events[name]) {
            this.events[name] = [];
        }
        this.events[name].push(callback);
    },

    dispatchEvent: function (eventName) {
        var event = this.events[eventName];
        if (!event) {
            console.log("Event Doesn´t exists");
            return
        }

        for (var i = 0; i < event.length; i++) {
           // event[i]();
            console.log(event[i]);
        }
    },

    play: function () {
        console.log("Playing movie" + this.attribute.title);
        this.dispatchEvent(this.eventsName.ONPLAY)
    },

    stop: function () {
        console.log("Stopping movie " + this.attribute.title);
        this.dispatchEvent(this.eventsName.ONSTOP);
    },

    set: function (attribute, value) {
        this.attribute[attribute] = value;
    },
    get: function (attribute) {
        return this.attribute[attribute];
    },


};

DownloadedMovie.prototype = new Movie();
DownloadedMovie.prototype.constructor = DownloadedMovie;
DownloadedMovie.prototype.download = function (){
    this.countDownloaded += 1;

    console.log(this.countDownloaded);
};


var terminator = new DownloadedMovie();
terminator.set("title", "Terminator");
terminator.set("director", "I Dont Know");
terminator.download();
terminator.addEventListener("onplay", "test1");
terminator.play();
terminator.download();
terminator.addEventListener("onstop", "test2");
terminator.stop();
terminator.addEventListener("onplay", "test3");
terminator.play();
terminator.download();

/*var terminator = new Movie();
terminator.set("title", "Terminator");
terminator.set("director", "I Dont Know");
terminator.addEventListener("onplay", "test1");
terminator.play();
terminator.addEventListener("onstop", "test2");
terminator.stop();
terminator.addEventListener("onplay", "test3");
terminator.play();
console.log(terminator.events);*/


