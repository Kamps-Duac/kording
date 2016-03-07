'use strict';

/**
 * @ngdoc overview
 * @name kordingApp
 * @description
 * # kordingApp
 *
 * Main module of the application.
 */
angular
  .module('kordingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdThemingProvider, $mdIconProvider) {
    $routeProvider
      // .when('/', {
      //   templateUrl: 'views/main.html',
      //   controller: 'MainCtrl',
      //   controllerAs: 'main'
      // })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      .when('/scale', {
        templateUrl: 'views/scale.html',
        controller: 'ScaleCtrl',
        controllerAs: 'scale'
      })
    
      .otherwise({
        redirectTo: '/scale'
      });

      $mdThemingProvider.theme('default')
        .primaryPalette('deep-purple')
        .accentPalette('deep-orange');

      $mdIconProvider.defaultIconSet('img/icons/sets/core-icons.svg', 24);
  });
