var app = angular.module('app');

app.controller('NavController', function($scope) {
  $scope.menuItems = [{
    name: 'About',
    url: 'about'
  }, {
    name: 'Menu',
    url: 'menu'
  }];
});
