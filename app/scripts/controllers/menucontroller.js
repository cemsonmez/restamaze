/**
 * Created by cem on 31.12.2014.
 */
var app = angular.module('app');


app.controller('MenuController', function ($scope, RestamazeFactory) {

  RestamazeFactory.getMenuItems().then(function (data) {
    $scope.menuItems = data;
  });

});
