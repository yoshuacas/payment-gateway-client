'use strict';

/**
 * @ngdoc service
 * @name paymentGatewayApp.popup
 * @description
 * # popup
 * Service in the paymentGatewayApp.
 */
angular.module('paymentGatewayApp')
  .service('popup', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
    	open : function (url){
    		var popupWindow = window.open(url,"_self");
    	}
    }
  });
