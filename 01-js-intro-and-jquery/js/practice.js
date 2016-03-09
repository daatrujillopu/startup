/**
 * Created by DESARROLLO on 26/02/2016.
 */

$(function () {
    $.when(
        $("#hiddensection").fadeIn(5000)
    ).then(function () {
        $("#alias").focus();
    });

    //
});

$("#eventbootcamp").click(function () {
    $.ajax({
        url: "http://bootcamp.aws.af.cm/welcome/yourname",
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $("#eventbootcampresponse").find('p').html("A error has ocurred when try to make the request");
            $("#eventbootcampresponse").find('p').css("color", "red");
            $("#eventbootcampresponse").fadeIn(3000);
        },

    }).done(function (msg) {

    });
});

$("#spotifyapi").click(function () {
    $.ajax({
        url: "https://api.spotify.com/v1/search",
        data: {"q": "Rolling Stones", "type": "album"},
        type: "GET",
    }).done(function (content) {

        var html = '';
        var albums = content.albums.items;

        for(var i=0,len=albums.length;i<len;i++){
            var album = albums[i];
            html += '<div class="album">'
            html += '<h2>'+album.name+'</h2>';
            html += '<img src="'+album.images[0].url+'" alt="'+album.name+'">';
            html += '</div>';
        }


        console.log("html " + html);
        $("#consultalbums").html(html);
    });
});

$("#spotifyapi2").click(function () {
    $.ajax({
        url: "https://api.spotify.com/v1/search",
        data: {"q": $("#searchartist").val().trim(), "type": "album"},
        type: "GET",
    }).done(function (content) {

        var html = '';
        var albums = content.albums.items;
        if(albums.length>0){
            for(var i=0,len=albums.length;i<len;i++){
                var album = albums[i];
                html += '<div class="album">'
                html += '<h2>'+album.name+'</h2>';
                html += '<img src="'+album.images[0].url+'" alt="'+album.name+'">';
                html += '</div>';
            }
        }else{
            html += "Sorry Artist not found or dont have any album";
        }


        $("#consultalbums").html(html);
    });
});