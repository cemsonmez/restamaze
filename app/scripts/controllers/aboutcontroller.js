/**
 * Created by cem on 02.01.2015.
 */
var app = angular.module('app');

app.controller('AboutController', function ($scope, $http) {
  $scope.slides = [];
  $scope.interval = 5000;
  $http.get('content/carousel.json').success(function (data) {
    $scope.slides = data;
  });
});

