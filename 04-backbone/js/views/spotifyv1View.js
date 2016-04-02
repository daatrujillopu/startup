/**
 * Created by DESARROLLO on 18/03/2016.
 */
define(["text!htmlviews/spotifyv1Template.html", "collections/spotifyv1Collection"],
    function (template, collectSpotifyv1) {
        var spotifyv1View = Backbone.View.extend({
                el: null,
                collection2: new Array(),
                html: "",


                initialize: function (options) {
                    this.el = options.container;
                    this.dataSpotify =  new collectSpotifyv1();

                    this.render();

                }
                ,
                render: function () {

                    var templateunderscore = _.template(template);

                    this.dataSpotify.fetch({
                        success: this.transformdata
                    });

                    console.log(this.collection2);
                    this.el.innerHTML = templateunderscore({
                        username: "Danny",
                        apellido: "Trujillo",
                        ejemplo: this.html
                    });
                },

                transformdata: function(data){
                    _.each(data.models, function (item) {
                        console.log(item.attributes.name );
                        this.collection2.append(item.attributes.name);
                    });
                }
            })
            ;
        return spotifyv1View;
    });