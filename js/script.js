AOS.init();

$(document).ready(function () {
    $(".menu__icon, .menu__link").click(function (event) {
      $(".menu__icon, .menu__body, .menu__list").toggleClass("active");
      $("body").toggleClass("lock");
    });
});

function slowScroll(id) {
  var offset = 0;
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - offset,
    },
    500
  );
  return false;
}

function noperevod(events) {
  events.preventDefault();
  };

jQuery(document).ready(function($) {
  var
    $window = $(window), 
    $target = $(".header"),
    $h = $target.offset().top; 
  $window.on('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > $h) {
      $target.addClass("sheensay_fixed");
    } else {     
      $target.removeClass("sheensay_fixed");
    }
  });
 
});

