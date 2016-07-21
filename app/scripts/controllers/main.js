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
        apiFactory.getRecommended($scope.text)
        .then(function (response) {
            $scope.venues = response.data.response.venues;
            console.log($scope.venues);
        }, function (error) {
            console.log(error);
        });
    };

    $scope.search = function() {
    	getRecommended();
    };

  	// detect platform for menus
  	$scope.getMenu = function(url) {
  		if (url) {
	  		if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
	  			// mobile
	  			return url.mobileUrl;
	  		} else {
	  			// desktop
	  			return url.url;
	  		}
	  	}
  	};

  });
