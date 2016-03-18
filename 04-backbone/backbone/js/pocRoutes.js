define( [
          "views/aboutView",
          "views/helpView" ], 
  function (  AboutView, HelpView){

    var pocRoutes = Backbone.Router.extend({

      view: null,

      routes: {
        "help":         "help",
        "about":        "about"
      },

      initialize: function(options) {
        this.view = options.view;
        
      },

      help: function() {
        console.log( "help ");
        var helpView = new HelpView({ el: this.view });
      },

      about: function() {
        console.log( "about me" );
        var aboutView = new AboutView({ el: this.view });
      }

    });


    return pocRoutes;

});

