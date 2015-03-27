'use strict';

/**
 * @ngdoc function
 * @name yoAngular2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngular2App
 */
angular.module('yoAngular2App')
  .controller('MainCtrl', function ($scope, localStorageService) {
    
    var todosInStore = localStorageService.get('todos');
    
    $scope.todos = todosInStore || [];
    
    $scope.$watch('todos', function(){
        localStorageService.set('todos', $scope.todos);
    }, true);
    
    /**
     * Método para adicionar todo.
     */
    $scope.addTodo = function(){
        $scope.todos.push($scope.newTodo);
        $scope.newTodo = '';
    };
    
    /**
     * Método para remover todo.
     */
    $scope.removeTodo = function(index){
        $scope.todos.splice(index, 1);
    };
  });
