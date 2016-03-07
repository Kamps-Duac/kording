'use strict';

/**
 * @ngdoc function
 * @name kordingApp.controller:SidenavCtrl
 * @description
 * # SidenavCtrl
 * Controller of the kordingApp
 */
angular.module('kordingApp')
    .controller('SidenavCtrl', function($mdSidenav) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        this.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };

        this.closeLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
    });
