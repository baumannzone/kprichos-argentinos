var Main = {
  init: function() {
    Main.initMobileNav();
    Main.homeCarousel();
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
  }

};

Main.init();
