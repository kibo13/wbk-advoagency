function sleep(ms) {
  ms += new Date().getTime();
  while (new Date() < ms) { }
}

sleep(20);

document.body.onload = function () {
  setTimeout(function () {
    var preloader = document.getElementById('loader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
};

$(document).ready(function () {

  /* =============================== */
  /* fade checkbox for resize window */
  /* =============================== */

  $(window).on('resize', function () {
    if ($(window).width() > 875) {
      $('.navbar__checkbox').prop('checked', false);
    }
  });

  /* ======================== */
  /* add class fixed for nav  */
  /* ======================== */

  $(window).scroll(function () {
    if ($(this).scrollTop() > $('nav').height()) {
      $('nav').addClass('navbar-fixed')
    } else {
      $('nav').removeClass('navbar-fixed')
    }
  });

  /* ============================= */
  /* control active link on scroll */
  /* ============================= */

  var lastId,
    topMenu = $(".navbar__list"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

  menuItems.click(function (e) {
    var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top - 30;
    $('html, body').stop().animate({
      scrollTop: offsetTop - 50
    }, 1500);
    e.preventDefault();
  });

  $(window).scroll(function () {
    var fromTop = $(this).scrollTop() + topMenuHeight;
    var cur = scrollItems.map(function () {
      if ($(this).offset().top - 50 < fromTop)
        return this;
    });

    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
      lastId = id;
      menuItems
        .parent().removeClass("active")
        .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
  });

  /* ======================================= */
  /* connection slick-slider for block intro */
  /* ======================================= */

  $('.slider').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev">‹</button>',
    nextArrow: '<button type="button" class="slick-btn slick-next">›</button>',
    draggable: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  });

  /* ================================= */
  /* smooth transition by anchor links */
  /* ================================= */

  $('.advice').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 100;
    $('body,html').animate({ scrollTop: top }, 1500);
  })

  /* =========================== */
  /* off checkbox for click link */
  /* =========================== */

  $('.navbar__link').on('click', function () {
    $('#burger').prop('checked', false);
  });

  /* ======================================= */
  /* connection slick-slider for block intro */
  /* ======================================= */

  $('input[type="tel"]').mask('+7 (999) 999-99-99');

});


/* ======================================= */
/* connection slick-slider for block news  */
/* ======================================= */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
};

function currentSlide(n) {
  showSlides(slideIndex = n);
};

function showSlides(n) {
  var i,
    slides = document.getElementsByClassName('carousel__item'),
    dots = document.getElementsByClassName('carousel__dot');

  if (n > slides.length) { slideIndex = 1 };
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
};

