'use strict';

var Main = {
  init: function init() {
    Main.initMobileNav();
    Main.homeCarousel();
  },

  initMobileNav: function initMobileNav() {
    $('.button-collapse').sideNav();
  },

  // Slick carousel
  homeCarousel: function homeCarousel() {
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
//# sourceMappingURL=main.js.map
