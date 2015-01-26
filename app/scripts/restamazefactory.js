/**
 * Created by cem on 20.01.2015.
 */

var app = angular.module('app');

app.factory('RestamazeFactory', ['$q', '$timeout', '$http', '$translate', '$rootScope',
  function ($q, $timeout, $http, $translate, $rootScope) {
    var factory = {};

    var deferred = $q.defer();

    $timeout(function () {
      $http.get('../content/menu.json').success(function (data) {
        deferred.resolve(data);
      });
    }, 30);

    factory.getMenuItems = function () {
      return deferred.promise;
    };

    factory.getTranslations = function (locale) {
      var path = "content/" + locale + ".json";
      $http.get(path).success(function (data) {
        $scope.translation = data;
      });
    };

    factory.changeLang = function (lang) {
      $rootScope.$broadcast("preferredLanguage", lang);
    };

    return factory;
  }]);
