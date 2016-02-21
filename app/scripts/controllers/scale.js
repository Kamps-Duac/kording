'use strict';

/**
 * @ngdoc function
 * @name kordingApp.controller:ScaleCtrl
 * @description
 * # ScaleCtrl
 * Controller of the kordingApp
 */
angular.module('kordingApp')
    .controller('ScaleCtrl', ['vexScale', function(vexScale) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        this.tonics = ['C', 'D', 'Db', 'E', 'F#', 'F', 'G', 'Ab', 'A', 'Bb', 'B'];
        this.scaleTypes = teoria.Scale.KNOWN_SCALES;

        this.selected = {
            'tonic': 'c',
            'scaleType': 'major'
        }

        // this.canvas = angular.element('canvas')[0];
        // vexScale(this.canvas);

        this.genVexScale = function(element, tonic, scaleType) {
            var notes = teoria.scale(tonic, scaleType).simple();
            vexScale(element, notes);
        }

    }]);
