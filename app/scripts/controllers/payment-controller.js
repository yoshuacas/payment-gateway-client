'use strict';

/**
 * @ngdoc function
 * @name paymentGatewayApp.controller:PaymentCtrl
 * @description
 * # PaymentCtrl
 * Controller of the paymentGatewayApp
 */
angular.module('paymentGatewayApp')
  .controller('PaymentCtrl', function (
	  	$scope, 
	  	Restangular, 
	  	tigoPaymentService, 
	  	popup,
	  	localStorageService) {

  	$scope.pay = function (f){

  		f.isTrusted = true;
  		localStorageService.set("myFormTrusted", f);
  		var mForm = localStorageService.get("myFormTrusted");
  		console.log (mForm);

		var result = tigoPaymentService.payOrder(mForm).then (function (data){
			console.log (data);
			$scope.token = data;
			console.log ();
			popup.open (data.token.redirectUrl);

		});
		
  	}

  	$scope.myForm = localStorageService.get("myFormTrusted");

  	$scope.$watch('token', function(newValue, oldValue) {
  		
  		console.log ("oldValue");
  		//$scope.token = newValue;



  		//popup.open (newValue);
	});
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
