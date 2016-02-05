'use strict';

/**
 * @ngdoc function
 * @name paymentGatewayApp.controller:ResultCtrl
 * @description
 * # ResultCtrl
 * Controller of the paymentGatewayApp
 */
angular.module('paymentGatewayApp')
  .controller('ResultCtrl', function ($scope,$location) {

	console.log ($location.search());
	var qs = $location.search();
	$scope.transactionDescription = qs.transactionDescription;
	$scope.transactionCode = qs.transactionCode;
	$scope.transactionStatus = qs.transactionStatus;
	$scope.merchantTransactionId = qs.merchantTransactionId;
	$scope.mfsTransactionId = qs.mfsTransactionId;


  });
