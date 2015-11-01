(function ($) {
  $(document).ready(function() {
    var backgroundURL = '../img/ferrybuilding.jpg'
    var bgImage = new Image();
    bgImage.src = backgroundURL;
    bgImage.onload = function(){
        var main = $(".main-page");

        var scale = this.height/this.width;
        var width = $(window).width();

        console.log(width * scale);

        main.css('background-image', 'url(' + backgroundURL + ')');
        main.css('width', '100%');
        main.css('height', width * scale + 'px');
    };

});
  }(jQuery));
