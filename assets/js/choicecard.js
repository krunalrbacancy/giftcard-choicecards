document.addEventListener("DOMContentLoaded", function(event) {
  $(document).ready(function () {
    // Partners Slider JS Start
    $(".our-partner-slider").owlCarousel({
      loop: true,
      nav: false,
      dots: false,
      center: true,
      lazyLoad: true,
      autoplay: true,
      slideTransition: "linear",
      smartSpeed: 4000,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      margin: 50,
      responsiveClass: true,
      responsive: {
        0: {
          items: 2.3,
          margin: 15,
        },
        768: {
          items: 4.5,
          margin: 30,
        },
        1200: {
          items: 7.5,
        },
      },
    });
    // Partners Slider JS End

    // Testimonials Slider JS Start
    $(".testimonials-slider").owlCarousel({
      nav: true,
      dots: false,
      center: true,
      autoplay: false,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      items: 1,
      navText: [
        "<img src='./assets/images/icons/arrow-left.svg' width='24' height='24' loading='lazy' alt='Arrow Left' />",
        "<img src='./assets/images/icons/arrow-right.svg' width='24' height='24' loading='lazy' alt='Arrow Right' />",
      ],
      responsiveClass: true,
      responsive: {
        0: {
          autoHeight: true,
        },
        1025: {
          autoHeight: false,
        },
      },
    });
    // Testimonials Slider JS End

    // GiftCard Offer Slider JS Start
    $(".giftcard-offer-slider").owlCarousel({
      nav: true,
      dots: false,
      center: true,
      lazyLoad: true,
      autoplay: false,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      items: 1,
      animateOut: "fadeOut",
      navContainer: ".giftcard-offer-slider .col-lg-5 .owl-nav",
      navText: [
        "<img src='./assets/images/icons/arrow-left.svg' width='24' height='24' loading='lazy' alt='Arrow Left' />",
        "<img src='./assets/images/icons/arrow-right.svg' width='24' height='24' loading='lazy' alt='Arrow Right' />",
      ],
    });
    // GiftCard Offer Slider JS End
  });
  // Header Top Fixed JS Start
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });
  // Header Top Fixed JS End
});