/**
 * Created by DESARROLLO on 18/03/2016.
 */
define(["text!htmlviews/spotifyv1Template.html", "collections/spotifyv1Collection"],
    function (template, collectSpotifyv1) {
        var spotifyv1View = Backbone.View.extend({


            el: null,
            collection2: {},
            html: "",
            buttonsearch: "",

            template: Handlebars.compile(template),

            initialize: function (options) {
                this.el = options.container;
                this.render();

            },

            render: function () {
                var templateunderscore = this.template;

                this.el.innerHTML = templateunderscore({
                    username: "Danny",
                    apellido: "Trujillo",
                    ejemplo: this.collection2
                })
                $(".beginsearchartist").on("click", this.onClick);
            },

            onClick: function () {
                var self = this;
                var artist = document.getElementById("searchartist");
                this.dataSpotify = new collectSpotifyv1(artist.value);
                this.dataSpotify.fetch().done(function () {
                    self.collection2 = self.dataSpotify.toJSON();
                    for( i in self.collection2){
                        console.log(i);
                    }
                    //self.renderSearch;
                    //var cosa = document.getElementById("albumsearch");

                    //cosa.innerHTML = self.renderSearch;
                });

            },


        });
        return spotifyv1View;
    });