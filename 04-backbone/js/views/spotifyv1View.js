/**
 * Created by DESARROLLO on 18/03/2016.
 */
define(["text!htmlviews/spotifyv1Template.html", "collections/spotifyv1Collection"],
    function (template, collectSpotifyv1) {
    var spotifyv1View = Backbone.View.extend({
        el: null,
        collSpotify: null,
        dataSpotify: {},
        initialize: function (options) {
            this.el = options.container;
            this.dataSpotify = new collectSpotifyv1();
            this.render();


            //console.log(template);
            /*this.element = element;
             this.element.innerHTML = template;*/
        },
        render: function () {
            this.dataSpotify.fetch({
                success: function (item, index, all) {

                    item.create({
                        albumName: item.get("name"),
                        imageUrl: item.get("image.url")
                    });
                }
            });
            console.log(this.dataSpotify.toJSON());
            this.el.innerHTML = template;
        }
    });
    return spotifyv1View;
});