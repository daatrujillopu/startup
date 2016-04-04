/**
 * Created by danny on 3/04/16.
 */
define(["text!templates/artistAlbums.html", "collection/artistAlbumsCollection"],
    function (template, artistAlbumCollection) {
        var artistAlbumsView = Backbone.View.extend({

            el: null,
            collection2: {},
            html: "",
            artistName: "",
            template: Handlebars.compile(template),
            dataSpotify2: {},

            initialize: function (options, id, artist) {
                var self = this;
                this.el = options.container;
                this.html = new Array();
                this.artistName = artist;
                this.dataSpotify2 = {};
                this.dataSpotify2 = new artistAlbumCollection( id );
                this.dataSpotify2.fetch().done(function () {
                    self.collection2 = self.dataSpotify2.toJSON();
                    var finalurlimage;
                    var image;
                    $.each(self.collection2, function(i, data){
                        try{
                            image = data.images[0].url;
                            finalurlimage = image.substring(24, image.length);
                        } catch (error){
                            image = "images/imagen-no-disponible.gif";
                        }
                        self.html.push({
                            "id" : data.id,
                            "albumName": data.name,
                            "image": image,
                            "partUrl": finalurlimage
                        });
                    });

                    self.render();
                });
            },

            render: function () {
                var templateunderscore = this.template;
                this.el.innerHTML = templateunderscore({
                    artistName: this.artistName,
                    albumData: this.html,
                });
            },

        });
        return artistAlbumsView;
    });