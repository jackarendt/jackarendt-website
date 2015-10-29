(function ($) {
  $(document).ready(function() {

    // hide .navbar first
    $(".navbar-brand").hide();

    // fade in .navbar
    $(function () {
        var i = 1;
        $(document.body).scroll(function (e) {
            if (document.querySelectorAll('.about-page')[0].getBoundingClientRect().top - $('nav').height()< 0) {
                $('.navbar-brand').fadeIn();
                $('#iphone').addClass('visible-img');
            } else {
                $('.navbar-brand').fadeOut();
            }

            if (document.querySelectorAll('.about-page')[0].getBoundingClientRect().top > $(window).height()/2) {
                $('#iphone').removeClass('visible-img');
            }
        });
    });
});
  }(jQuery));
