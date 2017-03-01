var Main = {
  init: function() {
    Main.initMobileNav();
    Main.homeCarousel();
    Main.macy();
    Main.parallax();
  },

  initMobileNav: function () {
    $('.button-collapse').sideNav();
  },


  // Slick carousel
  homeCarousel: function () {
    $('.fotos-slick').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      arrows: false,
      dots: true,
      mobileFirst: true
    });
  },

  // Masonry (Products)
  macy: function () {
    Macy.init({
      container: '#macy-cont',
      trueOrder: false,
      waitForImages: false,
      margin: 15,
      breakAt: {
        940: 3,
        650: 2,
        400: 1
      }
    });
  },

  parallax: function () {
    $('.parallax').parallax();
  }

};

$(function() {
  Main.init();
});

