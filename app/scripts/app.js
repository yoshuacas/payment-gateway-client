'use strict';

/**
 * @ngdoc overview
 * @name paymentGatewayApp
 * @description
 * # paymentGatewayApp
 *
 * Main module of the application.
 */
angular
  .module('paymentGatewayApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider, RestangularProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/result', {
        templateUrl: 'views/result.html',
        controller: 'ResultCtrl',
        controllerAs: 'result'
      })
      .when('/nontrusted', {
        templateUrl: 'views/nontrusted.html',
        controller: 'NontrustedCtrl',
        controllerAs: 'NontrustedCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('paymentGatewayApp');
});
