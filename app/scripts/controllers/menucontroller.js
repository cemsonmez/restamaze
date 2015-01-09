/**
 * Created by cem on 31.12.2014.
 */
var app = angular.module('app');


app.controller('MenuController', function ($scope, $http) {
  $http.get('content/menu.json').success(function (data) {
    $scope.menuItems = data;
  });
});
