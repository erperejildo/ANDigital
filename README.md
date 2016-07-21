# ANDigital

Technical exercise for <a href="https://andigital.com/" target="_blank">ANDigital</div>

## Build & development

Download this repository and run `npm install && bower install`.
After installations run `grunt build` for building and `grunt serve` to run server with Livereload.<br>
You can also test the app on your Android device (IOS is availabe as well but not tested) connecting it by USB and runing `cordova run android` or create an apk running `cordova build`. You apk will be created in `platforms\android\build\outputs\apk\android-debug.apk` (before Cordova commands you will need to run `grunt build`).

You can also see a deployed example here:<br>
http://rodriguezdaniel.com/apps/ANDigital/

## Features
- Responsive and material dessign
- Loading and error control (you can modify API url to see errors)
- Service for API calls.
- You can order venues by Checkins, Tip and User stats.
- Venues directive to show results.
- Created Cordova project to test app on devices.
- Created apk: http://rodriguezdaniel.com/apps/ANDigital/ANDigital.apk

## Technologies used
AngularJS, Yeoman, Grunt, NodeJS, Cordova, CSS3 (Sass), Git.

## Problems found

The icon url is not working or I can't figure out how it works (Bad Request):<br>
icon.prefix: "https://ss3.4sqi.net/img/categories_v2/food/sushi_"<br>
icon.suffix: ".png"<br>
icon.shortName: ""4bf58dd8d48988d1d2941735""
<p>
Something like "https://ss3.4sqi.net/img/categories_v2/food/sushi_4bf58dd8d48988d1d2941735.png" doesn't work.<br>
This thumb from their website has different url:<br> https://irs3.4sqi.net/img/general/300x300/20896080_v6VSRbH7s4Df4Hor7qL6d1RKraMbwYPFf4OwZaKthgw.jpg
