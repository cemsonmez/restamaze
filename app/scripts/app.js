var app = angular.module('app', ['ui.router', 'ui.bootstrap', 'pascalprecht.translate']);

var translateProvider;

app.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function ($stateProvider, $urlRouterProvider, $translateProvider) {
  $urlRouterProvider.otherwise('/about');

  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'views/about.html',
    controller: 'AboutController'
  }).state('menu', {
    url: '/menu',
    templateUrl: 'views/menu.html',
    controller: 'MenuController'
  });

  $translateProvider.preferredLanguage('en_US');

  $translateProvider.useStaticFilesLoader({
    prefix: 'content/',
    suffix: '.json'
  });
  //translateProvider = $translateProvider;

}]);
//
//app.run(["$http", function ($http) {
//  var englishTranslation = {};
//  var turkishTranslation = {};
//
//  $http.get("content/en_US.json").success(function (data) {
//    englishTranslation = data;
//  });
//
//  $http.get("content/tr_TR.json").success(function (data) {
//    turkishTranslation = data;
//  });
//
//  translateProvider.translations('en', englishTranslation);
//
//  translateProvider.translations('tr', turkishTranslation);
//
//  translateProvider.use("en");
//
//}]);


