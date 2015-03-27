'use strict';

/**
 * @ngdoc overview
 * @name yoAngular2App
 * @description
 * # yoAngular2App
 *
 * Main module of the application.
 */
angular
  .module('yoAngular2App', [
    'ngRoute',
    'ui.sortable',
    'LocalStorageModule'
  ])
  .config(['localStorageServiceProvider', function(localStorageServiceProvider){
      localStorageServiceProvider.setPrefix('ls');
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/teste', {
        templateUrl: 'views/teste.html',
        controller: 'TesteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
