(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {
          var title = document.getElementsByTagName('title')[0].innerHTML;
          (title).should.be.equal('Mocha Spec Runner');
      });
    });
  });
})();
