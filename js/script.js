

$(document).ready(function () {
  $(".menu__icon, .menu__link").click(function (event) {
    $(".menu__icon, .menu__body, .menu__list").toggleClass("active");
    $("body").toggleClass("lock");
  });
});



function slowScroll(id) {
  var offset = 200;
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



jQuery(document).ready(function ($) {
  var
    $window = $(window),
    $target = $(".header"),
    $h = $target.offset().top;
  $window.on('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > $h) {
      $target.addClass("sheensay_fixed");
    } else {
      $target.removeClass("sheensay_fixed");
    }
  });

});



let popup = document.getElementById("popup");
let popupClose = document.getElementById("close_button");
let popup_body = document.getElementById("popup_body");

popupClose.onclick = function () {
  popup.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == popup_body) {
    popup.style.display = "none";
  }
};



// Если нет куки HideModal
if (!$.cookie('HideModal')) {
  // Покажем окно с id="popup-first-visit" через 300000 миллисекунд
  setTimeout("document.getElementById('popup').style.display='block'", 30);
  // Установим куки HideModal, не показывать окно в течении 365 дней
  $.cookie('HideModal', true, { expires: 1, path: '/' });
}




// const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
// const input = document.getElementById('footer__form');
// input.addEventListener('input', onInput);

// function onInput() {
//   if (isEmailValid(input.value)) {
//     input.style.borderColor = 'green';
//   } else {
//     input.style.borderColor = 'red';
//   }
// }

// input.addEventListener('input', onInput);

// function isEmailValid(value) {
//   return EMAIL_REGEXP.test(value);
// }