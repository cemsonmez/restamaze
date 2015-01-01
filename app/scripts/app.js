var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/about');

  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'views/about.html'
  }).state('menu', {
    url: '/menu',
    templateUrl: 'views/menu.html',
    controller: 'MenuController'
  });
});
