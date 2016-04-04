(function ($) {
    $(document).ready(function () {

// Cache the elements we'll need
        var menu = $('.menu');
        var menuList = menu.find('ul:first');
        var listItems = menu.find('li').not('#responsive-tab');

// Create responsive trigger
        //menuList.prepend('<li id="responsive-tab"><a href="#">Menu</a></li>');

// Toggle menu visibility
        menu.on('click', '#responsive-tab', function () {
            listItems.slideToggle('fast');
            listItems.addClass('collapsed');
        });

        $(".menu li").click(function(){
            $(this).parent().find("li.active").removeClass("active");
            $(this).addClass("active");
        });

    });
})(jQuery);
