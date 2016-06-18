(function ($) {
  $(document).ready(function() {
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
