AOS.init();

$(document).ready(function () {
    $(".menu__icon, .menu__link").click(function (event) {
      $(".menu__icon, .menu__body, .menu__list").toggleClass("active");
      $("body").toggleClass("lock");
    });
});

