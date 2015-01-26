/**
 * Created by cem on 02.01.2015.
 */
var app = angular.module('app');

app.controller('AboutController', ['$scope', '$http', '$translate', function ($scope, $http, $translate) {
  $scope.slides = [];
  $scope.interval = 5000;
  $http.get('content/carousel.json').success(function (data) {
    $scope.slides = data;
  });

  $scope.description = "content.about.description";

  $scope.$on('preferredLanguage', function (events, lang) {
    $translate.use(lang);
  })

}]);

