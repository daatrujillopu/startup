define  (["text!views/about.template"], function (tmpl) {

    var aboutView = Backbone.View.extend({

      events: {
        "click .js-sample-about" : "onClick"    
    },
    template: Handlebars.compile(tmpl),


    globerModel: {
        name: "David Jose",
        age: 30,
        lastname: "gonzalez",
        amigos: [
        {
            name: "juan",
            lastname: "Ramirez"
        },
        {
            name: "pedro",
            lastname: "Ramirez"
        },
        {
            name: "andres",
            lastname: "Ramirez"
        },
        {
            name: "adrian",
            lastname: "Ramirez"
        }
        ]
    },


    initialize: function() {
        this.render()
    },

    render: function() {
        var htmlText = this.template (this.globerModel)
        this.$el.html( htmlText );
    },

    onClick: function (e){
        e.stopPropagation();
        e.preventDefault();
        console.log("click on sample in about me view")

    }

});


    return aboutView;

});