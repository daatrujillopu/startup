/**
 * Created by danny on 17/03/16.
 */
define(["views/searchArtistView", "views/artistAlbumsView",
    "views/albumSongsView", "views/albumSearchView"],
    function (artistSeeker, artistAlbums, albumSongs, albumSeeker) {
    var myRoutes = Backbone.Router.extend({

        routes: {
            "": "searchArtist",
            "searchartist": "searchArtist",
            "artist/:id/:artistname": "artistAlbums",
            "albumsongs/:id/:albumname/:urlimage": "albumSongs",
            "searchalbum": "albumSearch"
        },

        el: null,

        initialize: function (options) {
            this.el = options.view;
        },

        searchArtist: function () {
            var view = new artistSeeker({container: this.el});
        },

        artistAlbums: function (id, artist) {
            var view = new artistAlbums({container: this.el}, id, artist);
        },

        albumSongs: function (albumId,albumName,urlImage) {
            var view = new albumSongs({container: this.el}, albumId, albumName, urlImage);
        },

        albumSearch: function () {
            var view = new albumSeeker({container: this.el});
        },

    });
    return myRoutes;
});