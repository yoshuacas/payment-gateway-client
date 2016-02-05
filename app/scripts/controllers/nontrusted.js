'use strict';

/**
 * @ngdoc function
 * @name paymentGatewayApp.controller:NontrustedCtrl
 * @description
 * # NontrustedCtrl
 * Controller of the paymentGatewayApp
 */


angular.module('paymentGatewayApp')
  .controller('NontrustedCtrl', function (
	  	$scope, 
	  	Restangular, 
	  	tigoPaymentService, 
	  	popup,
	  	localStorageService) {

  	$scope.pay = function (f){

  		f.isTrusted = false;
  		localStorageService.set("myFormNonTrusted", f);
  		var mForm = localStorageService.get("myFormNonTrusted");
  		console.log (mForm);

		var result = tigoPaymentService.payOrder(mForm).then (function (data){
			console.log (data);
			$scope.token = data;
			console.log ();
			popup.open (data.token.redirectUrl);

		});
		
  	}

  	$scope.myForm = localStorageService.get("myFormNonTrusted");

  	$scope.$watch('token', function(newValue, oldValue) {
  		
  		console.log ("oldValue");
	});
    
    
  });


