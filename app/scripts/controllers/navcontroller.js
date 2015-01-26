var app = angular.module('app');

app.controller('NavController', ['$scope', 'RestamazeFactory', '$translate',
  function ($scope, RestamazeFactory, $translate) {
    $scope.menuItems = [{
      "name": 'nav.button.about',
      "url": 'about'
    }, {
      "name": 'nav.button.menu',
      "url": 'menu'
    }];

    $scope.changeLang = function (lang) {
      RestamazeFactory.changeLang(lang);
    };

    $scope.$on('preferredLanguage', function (events, lang) {
      $translate.use(lang);
    });

  }]);
