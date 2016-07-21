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

            if ($scope.venues.length == 0) {
            	$scope.messageText = 'No results';
            	$scope.message = false;
            	$scope.showOrder = false;
            } else {
            	$scope.showOrder = true;
            }

            $scope.loading = false;
        }, function (error) {
        	$scope.showOrder = true;
            $scope.loading = false;
            $scope.error   = true;
        });
    };

    // MOCKUP
    /*$scope.text = 'sushi';
    getRecommended();*/

    $scope.search = function() {
    	$scope.message  = true;
    	$scope.loading  = true;
    	$scope.error    = false;
    	getRecommended();
    };

    // change venues order
    $scope.orderBy = function(order) {

    	if ($scope.order != order) {
    		$scope.order = order;
    		$scope.orderVenue = '-stats.' + order;
			$scope.up = false;
    	} else {
    		if ($scope.up) {
		    	$scope.orderVenue = '-stats.' + order;
    			$scope.up = false;
    		} else {
		    	$scope.orderVenue = 'stats.' + order;
    			$scope.up = true;
    		}
    	}
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
