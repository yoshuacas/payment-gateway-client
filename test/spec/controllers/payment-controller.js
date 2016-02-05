'use strict';

describe('Controller: PaymentControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('paymentGatewayApp'));

  var PaymentControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PaymentControllerCtrl = $controller('PaymentControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PaymentControllerCtrl.awesomeThings.length).toBe(3);
  });
});
