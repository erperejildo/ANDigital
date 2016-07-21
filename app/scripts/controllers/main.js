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

  	$scope.messageText = 'Search something';

  	function getRecommended() {
        apiFactory.getRecommended($scope.text)
        .then(function (response) {
            $scope.venues = response.data.response.venues;
            console.log($scope.venues);
            // no results
            if ($scope.venues.length == 0) {
            	$scope.messageText = 'No results';
            	$scope.message = false;
            }

            $scope.loading = false;
        }, function (error) {
            $scope.loading = false;
            $scope.error   = true;
        });
    };

    $scope.search = function() {
    	$scope.message  = true;
    	$scope.loading  = true;
    	$scope.error    = false;
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
