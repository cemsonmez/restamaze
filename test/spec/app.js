'use strict';

describe('Controller: navController', function () {

  // load the controller's module
  beforeEach(module('app'));

  var navController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('navController', {
      $scope: scope
    });
  }));

  it('should attach a list of menuItems to the scope', function () {
    expect(scope.menuItems.length).toBe(2);
  });
});
