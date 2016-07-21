'use strict';

/**
 * @ngdoc service
 * @name andigitalApp.apiFactory
 * @description
 * # apiFactory
 * Service in the andigitalApp.
 */
angular.module('andigitalApp')
  .service('apiFactory', function ($http) {

    var apiFactory  = {};
    // API config
    var cliendID     = 'ATYTFKNQMUBELBOYI0XRL3VMSRY2EFR2L44RCLN3YEPE2V0F';
    var clientSecret = '3PPYKXTGHOE2YXFFAOIAZQOIC4RDZZSAMAZIXV2YAHWX5HJD';
    var urlBase  	   = 'https://api.foursquare.com/v2/venues/search?client_id=' + cliendID + '&client_secret=' + clientSecret + '&v=20130815&ll=40.7,-74&query=';

    apiFactory.getRecommended = function (text) {
        return $http.get(urlBase + text);
    };

    apiFactory.getPopular = function () {
        return $http.get(urlBase);
    };

    return apiFactory;

  });
