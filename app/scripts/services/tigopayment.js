'use strict';

/**
 * @ngdoc service
 * @name paymentGatewayApp.tigoPaymentService
 * @description
 * # tigoPaymentService
 * Service in the paymentGatewayApp.
 */
angular.module('paymentGatewayApp')
  .service('tigoPaymentService', function ($q, Restangular) {
    // AngularJS will instantiate a singleton by calling "new" on this function


	Restangular.setBaseUrl('http://localhost:3000/api/');
    var payOrders = Restangular.all('orders/pay');

    return {
      payOrder: function (myForm) {
        var deferred = $q.defer();
       
		var headers = {
			'Content-Type' : 'application/json'
		};

		payOrders.post(myForm, '', headers).then (function (data){
			//console.log (data.token.redirectUrl);
			deferred.resolve ( data ) ;
		});

        return deferred.promise;
      }
    };

  });
