(function ($) {
  $(document).ready(function() {
    var backgroundURL = '../img/ferrybuilding.jpg';
    if($(window).width() < 768) {
        backgroundURL = '../img/ferrybuilding-small.jpg';
    }
    var bgImage = new Image();
    bgImage.src = backgroundURL;
    bgImage.onload = function(){
        var main = $(".main-page");

        var scale = this.height/this.width;
        var width = $(window).width();

        console.log("height: " + width * scale);

        main.css('background-image', 'url(' + backgroundURL + ')');
        main.css('width', '100%');
        main.css('padding-top', $('nav').height() + 'px');
        if (width > 768) {
            main.css('height', width * scale + 'px');
        } else {
            main.css('height', width * scale * 2 + 'px');
        }

    };

    $('.navbar-brand').hide();
    $(document.body).scroll(function (e) {
        if (document.querySelectorAll('.about-page')[0].getBoundingClientRect().top - $('nav').height()< 0) {
            $('.navbar-brand').fadeIn();
        } else {
            $('.navbar-brand').fadeOut();
        }
    });
});
  }(jQuery));
