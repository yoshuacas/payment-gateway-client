'use strict';

describe('Service: tigoPayment', function () {

  // load the service's module
  beforeEach(module('paymentGatewayApp'));

  // instantiate service
  var tigoPayment;
  beforeEach(inject(function (_tigoPayment_) {
    tigoPayment = _tigoPayment_;
  }));

  it('should do something', function () {
    expect(!!tigoPayment).toBe(true);
  });

});
