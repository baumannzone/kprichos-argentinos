'use strict';

(function () {
  'use strict';

  var Main = {
    init: function init() {
      Main.initMobileNav();
      Main.homeCarousel();
      Main.macy();
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
    },

    // Masonry Style (Products)
    macy: function macy() {
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
    }

  };

  // Ready
  $(function () {
    Main.init();
  });
})();
//# sourceMappingURL=main.js.map
