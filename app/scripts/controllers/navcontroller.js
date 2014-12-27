var app = angular.module('app');

app.controller('navController', function($scope) {
  $scope.menuItems = [{
    name: 'About',
    url: 'about'
  }, {
    name: 'Menu',
    url: 'menu'
  }];
});
