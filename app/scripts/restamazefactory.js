/**
 * Created by cem on 20.01.2015.
 */

var app = angular.module('app');

app.factory('RestamazeFactory', function ($q, $timeout, $http) {
  var factory = {};

  var deferred = $q.defer();

  $timeout(function () {
    $http.get('../content/menu.json').success(function (data) {
      deferred.resolve(data);
    });
  }, 30);

  factory.getMenuItems = function () {
    return deferred.promise;
  }

  return factory;
});
