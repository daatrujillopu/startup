/**
 * Created by danny on 3/04/16.
 */
/**
 * Created by danny on 3/04/16.
 */
define(["text!templates/albumSongs.html", "collection/albumSongsCollection"],
    function (template, albumSongsCollection) {
        var artistAlbumsView = Backbone.View.extend({

            el: null,
            collection2: {},
            html: "",
            template: Handlebars.compile(template),
            dataSpotify2: {},
            imageUrl: "",
            albumName: "",

            initialize: function (options, id, albumName, imageUrl) {
                var self = this;
                this.el = options.container;
                this.html = new Array();
                this.imageUrl = imageUrl;
                this.albumName = albumName;
                this.dataSpotify2 = {};
                this.dataSpotify2 = new albumSongsCollection( id );
                this.dataSpotify2.fetch().done(function () {
                    self.collection2 = self.dataSpotify2.toJSON();
                    var preview_url;
                    $.each(self.collection2, function(i, data){
                        try{
                            preview_url = data.preview_url;
                        } catch (error){
                            preview_url = "";
                        }
                        self.html.push({
                            "num": i+1,
                            "id" : data.id,
                            "name": data.name,
                            "preview_song": data.preview_url
                        });
                    });
                    self.render();
                });
            },

            render: function () {
                var templateunderscore = this.template;
                this.el.innerHTML = templateunderscore({
                    albumName: this.albumName,
                    imageUrl: this.imageUrl,
                    albumData: this.html,
                });
            },

        });
        return artistAlbumsView;
    });