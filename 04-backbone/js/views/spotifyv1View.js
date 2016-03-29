/**
 * Created by DESARROLLO on 18/03/2016.
 */
define(["text!htmlviews/spotifyv1Template.html", "collections/spotifyv1Collection"],
    function (template, collectSpotifyv1) {
        var spotifyv1View = Backbone.View.extend({
                el: null,
                collSpotify: null,
                dataSpotify: new collectSpotifyv1(),
                html: "",


                initialize: function (options) {
                    this.el = options.container;
                    this.listenTo(this.dataSpotify.fetch(), "change", this.render)
                    /*this.dataSpotify.fetch({
                        success: function (algo, response) {
                            var data = response.albums.items;
                            for (var i = 0; i < data.length; i++) {
                                console.log(data[i].name);
                                this.html = data[i].name;
                            }

                        }
                    });
                    this.render();*/

                }
                ,
                render: function () {

                    var templateunderscore = _.template(template);
                    this.el.innerHTML = templateunderscore({
                        username: "Danny",
                        apellido: "Trujillo",
                        ejemplo: this.html
                    });
                }
            })
            ;
        return spotifyv1View;
    });