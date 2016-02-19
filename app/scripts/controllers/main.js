'use strict';

/**
 * @ngdoc function
 * @name kordingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the kordingApp
 */
angular.module('kordingApp')
    .controller('MainCtrl', function() {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        this.scaleImages = [{
            'src': '/images/CMajor.png',
            'name': 'C Major'
        }, {
            'src': '/images/d-major.png',
            'name': 'D Major'
        }];
    });
