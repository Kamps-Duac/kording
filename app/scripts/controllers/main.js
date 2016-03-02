'use strict';

/**
 * @ngdoc function
 * @name kordingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kordingApp
 */
angular.module('kordingApp')
    .controller('MainCtrl', function($scope, $mdSidenav) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.openLeftMenu = function() {
        	$mdSidenav('left').toggle();
        };

        $scope.closeLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
    });
