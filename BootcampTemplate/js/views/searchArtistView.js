/**
 * Created by danny on 3/04/16.
 */
/**
 * Created by DESARROLLO on 18/03/2016.
 */
define(["text!templates/searchArtist.html", "collection/searchArtistCollection"],
    function (template, collectArtist) {

        var artistView = Backbone.View.extend({

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
                var containerSearch = document.getElementById("albumsearch");
                var html = "";
                var artist = document.getElementById("searchartist");
                this.dataSpotify = new collectArtist(artist.value);
                this.dataSpotify.fetch().done(function () {
                    self.collection2 = self.dataSpotify.toJSON();
                    var artisturl;
                    var image;
                    $.each(self.collection2, function(i, data){
                        artisturl = data.uri.split(":");
                        try{
                            image = data.images[0].url;
                        } catch (error){
                            image = "images/imagen-no-disponible.gif";
                        }
                        html += "<div class='col-3'>";
                        html += "<a href='#artist/"+artisturl[2]+"/"+data.name+"'><h4>"+data.name+"</h4></a>";
                        html += "<a href='#artist/"+artisturl[2]+"/"+data.name+"'><img src='"+image+"'></a>";
                        html += "</div>";
                    });
                    containerSearch.innerHTML = html;
                });

            },

        });
        return artistView;
    });