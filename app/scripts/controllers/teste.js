'use strict';

/**
 * @ngdoc function
 * @name yoAngular2App.controller:TesteCtrl
 * @description
 * # TesteCtrl
 * Controller of the yoAngular2App
 */
angular.module('yoAngular2App')
  .controller('TesteCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.authorName = 'Brayan Dichtl';
  });
