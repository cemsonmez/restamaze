/**
 * Created by cem on 31.12.2014.
 */
var app = angular.module('app');


app.controller('MenuController', ['$scope', 'RestamazeFactory', '$translate',
  function ($scope, RestamazeFactory, $translate) {

    RestamazeFactory.getMenuItems().then(function (data) {
      $scope.menuItems = data;
    });

    $scope.$on('preferredLanguage', function (events, lang) {
      $translate.use(lang);
    });

  }]);
