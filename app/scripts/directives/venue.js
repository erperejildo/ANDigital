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
 		template: ['<div id="venues">',
 		'<div class="venue" ng-repeat="venue in venues"><div class="box">',
	 		'<div class="name"><a href="{{venue.url}}" target="_blank">{{venue.name}}</a></div>',
	 		'<div class="address">{{venue.location.formattedAddress[0]}}, {{venue.location.formattedAddress[1]}}</div>',
	 		'<a href="{{getMenu(venue.menu)}}" target="_blank" class="link" ng-if="venue.hasMenu">Menu</a>',
	 		'<a href="{{venue.delivery.url}}" target="_blank" class="link" ng-if="venue.delivery">Order</a>',
	 		'<span class="phone">{{venue.contact.formattedPhone}}</span>',
	 		'<a href="https://twitter.com/{{venue.contact.twitter}}" target=="_blank" class="twitter" ng-if="venue.contact.twitter"><img src="images/twitter.svg" /></a>',
	 		'</div>',
 		'</div></div>',
 		'</div>'].join(''),
 		restrict: 'E',
 		link: function (scope, element, attrs) {
 		}
 	};
 });
