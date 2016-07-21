'use strict';

/**
 * @ngdoc directive
 * @name andigitalApp.directive:venue
 * @description
 * # venue
 */
 angular.module('andigitalApp')
 .directive('venue', function () {
 	return {
		templateUrl: 'views/directives/venue.html',
 		restrict: 'E',
 		link: function (scope, element, attrs) {
 		}
 	};
 });
