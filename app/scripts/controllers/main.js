'use strict';

/**
 * @ngdoc function
 * @name andigitalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the andigitalApp
 */
angular.module('andigitalApp')
  .controller('MainCtrl', function ($scope, apiFactory) {
    
  	function getRecommended() {
        apiFactory.getRecommended()
        .then(function (response) {
            $scope.venues = response.data.response.venues;
            console.log($scope.venues);
        }, function (error) {
            console.log(error);
        });
    }

    getRecommended();

  });
