'use strict';

describe('Controller: TesteCtrl', function () {

  // load the controller's module
  beforeEach(module('yoAngular2App'));

  var TesteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TesteCtrl = $controller('TesteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
    
  it('Testando conceito TDD', function () {
    expect(scope.authorName).toEqual('Brayan Dichtl');
  });
});
