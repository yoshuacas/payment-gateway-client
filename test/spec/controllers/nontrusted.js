'use strict';

describe('Controller: NontrustedCtrl', function () {

  // load the controller's module
  beforeEach(module('paymentGatewayApp'));

  var NontrustedCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NontrustedCtrl = $controller('NontrustedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NontrustedCtrl.awesomeThings.length).toBe(3);
  });
});
