'use strict';

/**
 * @ngdoc function
 * @name kordingApp.controller:MaintoolbarCtrl
 * @description
 * # MaintoolbarCtrl
 * Controller of the kordingApp
 */
angular.module('kordingApp')
    .controller('MaintoolbarCtrl', function($scope, $mdDialog, $mdSidenav) {
        this.navLinks = [{
            label: 'Home',
            href: '/#/'
        }, {
            label: 'Scale',
            href: '/#/scale'
        }, {
            label: 'kamps-duac.github.io',
            href: 'http://kamps-duac.github.io'
        }];

        $scope.showTabDialog = function(ev) {
            $mdDialog.show({
                parent: angular.element(document.body),
                targetEvent: ev,
                templateUrl: 'views/pickerdialog.html',
                controller: 'PickerdialogCtrl',
                clickOutsideToClose: true
            });
        };

        $scope.openLeftMenu = function() {
            $mdSidenav('left').toggle();
        };

        $scope.closeLeftMenu = function() {
            $mdSidenav('left').toggle();
        };
    });
