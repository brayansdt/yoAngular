'use strict';

describe('Controller: MenuCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngular2App'));

  var MenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MenuCtrl = $controller('MenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of menu Items to the scope', function () {
    expect(scope.menuItems).not.toBe(undefined);
  });
    
  it('should have at least one element selected inside menu Items', function () {
      var activeElement = false;
      scope.menuItems.forEach(function(item){
          if(item.selected){
              activeElement = item.selected;
              return;
          }
      });
      expect(activeElement).toBe(true);
  });   
    
    it('should have at maximum one element selected inside menu Items', function () {
      var activeElements = 0;
      scope.menuItems.forEach(function(item){
          if(item.selected){
              activeElements++;
          }
      });
      expect(activeElements).toBe(1);
    });   
    
  it('should change the selected element', function () {
      var arbitraryIndex = Math.floor(Math.random() * scope.menuItems.length);
      scope.selectItem(arbitraryIndex);
      expect(scope.menuItems[arbitraryIndex].selected).toBe(true);
  }); 
    
  it('should have just one element selected', function () {
      //changing the selected value a 10 times
      for(var count = 0; count < 10; count++){
          var arbitraryIndex = Math.floor(Math.random() * scope.menuItems.length);
          scope.selectItem(arbitraryIndex);
      } 
       
      var activeElements = 0;
      scope.menuItems.forEach(function(item){
          if(item.selected){
              activeElements++;
          }
      });
      expect(activeElements).toBe(1);
  });
});