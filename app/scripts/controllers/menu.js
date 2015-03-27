'use strict';

/**
 * @ngdoc function
 * @name yoAngular2App.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the yoAngular2App
 */
angular.module('yoAngular2App')
  .controller('MenuCtrl', function ($scope, $rootScope) {
    $scope.menuItems = [
        {route: '/', name:'Home', selected: true},
        {route: '/teste', name:'Teste', selected: false},
    ];
    
    $scope.selectItem = function(index){
        $scope.menuItems.forEach(function(item){
            if(item.selected){
                item.selected = false; 
                return; 
            }
        });
        
        $scope.menuItems[index].selected = true;
    };
        
    
    $rootScope.$on('$routeChangeStart', function(event, next) {
        for(var key in $scope.menuItems){
            if($scope.menuItems[key].route === next.$$route.originalPath){
                $scope.selectItem(key);
                return;
            }
        }
    });
});
