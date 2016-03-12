'use strict';

/**
 * @ngdoc function
 * @name kordingApp.controller:PickerdialogCtrl
 * @description
 * # PickerdialogCtrl
 * Controller of the kordingApp
 */
angular.module('kordingApp')
    .controller('PickerdialogCtrl', function($scope, $mdDialog, scaler) {
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };

        $scope.scaler = scaler;
    });
