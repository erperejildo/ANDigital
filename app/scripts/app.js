'use strict';

/**
 * @ngdoc overview
 * @name andigitalApp
 * @description
 * # andigitalApp
 *
 * Main module of the application.
 */
angular
  .module('andigitalApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
