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
        this.defaultOctave = '4';

        this.selected = {
            'tonic': 'c',
            'scaleType': 'major'
        };

        // this.canvas = angular.element('canvas')[0];
        // vexScale(this.canvas);

        this.genVexScale = function(canvas, tonic, scaleType) {
            var scale = {
                tonic: tonic,
                notes: [],
                scaleType: scaleType,
                // I can't find a good table of accidentals for Key Signature, so lets dynamically create one
                accSpec: {
                    acc: null,
                    num: 0
                }
            };
            var teoriaNotes = teoria.scale(tonic + this.defaultOctave, scaleType).notes();
            for (var i = 0; i < teoriaNotes.length; i++) {
                var tn = teoriaNotes[i];
                scale.notes.push(tn.name() + tn.accidental() + '/' + tn.octave());
                if (tn.accidental()) {
                    if (!scale.accSpec.acc) { scale.accSpec.acc = tn.accidental(); }
                    scale.accSpec.num++;
                }
            }
            vexScale(canvas, scale);
        };

    }]);
