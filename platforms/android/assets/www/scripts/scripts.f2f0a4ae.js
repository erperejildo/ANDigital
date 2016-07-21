"use strict";angular.module("andigitalApp",["ngAnimate","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]),angular.module("andigitalApp").service("apiFactory",["$http",function(a){var b={},c="ATYTFKNQMUBELBOYI0XRL3VMSRY2EFR2L44RCLN3YEPE2V0F",d="3PPYKXTGHOE2YXFFAOIAZQOIC4RDZZSAMAZIXV2YAHWX5HJD",e="https://api.foursquare.com/v2/venues/search?client_id="+c+"&client_secret="+d+"&v=20130815&ll=40.7,-74&query=";return b.getRecommended=function(b){return a.get(e+b)},b}]),angular.module("andigitalApp").controller("MainCtrl",["$scope","apiFactory",function(a,b){function c(){b.getRecommended(a.text).then(function(b){a.venues=b.data.response.venues,0==a.venues.length?(a.messageText="No results",a.message=!1,a.showOrder=!1):a.showOrder=!0,a.loading=!1},function(b){a.showOrder=!0,a.loading=!1,a.error=!0})}a.messageText="Search something",a.search=function(){a.message=!0,a.loading=!0,a.error=!1,c()},a.orderBy=function(b){a.order!=b?(a.order=b,a.orderVenue="-stats."+b,a.up=!1):a.up?(a.orderVenue="-stats."+b,a.up=!1):(a.orderVenue="stats."+b,a.up=!0)},a.getMenu=function(a){return a?/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?a.mobileUrl:a.url:void 0}}]),angular.module("andigitalApp").directive("venue",function(){return{templateUrl:"views/directives/venue.html",restrict:"E",link:function(a,b,c){}}}),angular.module("andigitalApp").run(["$templateCache",function(a){a.put("views/directives/venue.html",'<div class="box"> <div class="name"><a href="{{venue.url}}" target="_blank">{{venue.name}}</a></div> <div class="address">{{venue.location.formattedAddress[0]}}, {{venue.location.formattedAddress[1]}}</div> <a href="{{getMenu(venue.menu)}}" target="_blank" class="link" ng-if="venue.hasMenu">Menu</a> <a href="{{venue.delivery.url}}" target="_blank" class="link" ng-if="venue.delivery">Order</a> <span class="phone">{{venue.contact.formattedPhone}}</span> <a href="https://twitter.com/{{venue.contact.twitter}}" target="=&quot;_blank&quot;" class="twitter" ng-if="venue.contact.twitter"><img src="images/twitter.131235a6.svg"></a> </div>'),a.put("views/main.html",'<div id="search-box"> <form ng-submit="search()"> <input type="text" placeholder="I\'m looking..." ng-model="text"> </form> <img id="search" src="images/search.cd009d34.svg" ng-click="search()"> <div id="order" ng-show="showOrder"> <span>Order by stats:</span> <div ng-click="orderBy(\'checkinsCount\')"><img src="images/arrow.a7db725f.svg" ng-class="{\'show\':order == \'checkinsCount\', \'up\':up}">Checkins</div> <div ng-click="orderBy(\'tipCount\')"><img src="images/arrow.a7db725f.svg" ng-class="{\'show\':order == \'tipCount\', \'up\':up}">Tip</div> <div ng-click="orderBy(\'usersCount\')"><img src="images/arrow.a7db725f.svg" ng-class="{\'show\':order == \'usersCount\', \'up\':up}">Users</div> </div> </div> <div id="message" ng-hide="message">{{messageText}}</div> <div id="error" ng-show="error">Please, try later</div> <div id="spinner" ng-show="loading"><div class="uil-ring-css"><div></div></div></div> <div id="venues"> <div class="venue" ng-repeat="venue in venues | orderBy:orderVenue"><venue></venue></div> </div>'),a.put("views/venues.html","sss")}]);