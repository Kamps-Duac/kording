'use strict';

/**
 * @ngdoc function
 * @name kordingApp.controller:ScaleCtrl
 * @description
 * # ScaleCtrl
 * Controller of the kordingApp
 */
angular.module('kordingApp')
    .controller('ScaleCtrl', ['vexScale', 'scaler', '$scope',
        function(vexScale, scaler, $scope) {

            this.DEFAULT_OCTAVE = '4';


            $scope.currentScale = scaler.getCurrentScale();

            

            $scope.$watch('currentScale', function(newVal, oldVal) {
                if (newVal !== oldVal) {
                    $scope.currentScale = newVal;
                }
            });

            // TODO: make function that creates scale object
            this.genVexScale = function(tonic, accidental, scaleType) {
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
                var teoriaNotes = teoria.scale(tonic + accidental + this.DEFAULT_OCTAVE, scaleType).notes();
                for (var i = 0; i < teoriaNotes.length; i++) {
                    var tn = teoriaNotes[i];
                    var acc = ( teoriaNotes[i].accidental() ? teoriaNotes[i].accidental() : '');
                    scale.notes.push(tn.name() + acc + '/' + tn.octave());
                    if (tn.accidental()) {
                        if (!scale.accSpec.acc) { scale.accSpec.acc = tn.accidental(); }
                        scale.accSpec.num++;
                    }
                }
                var s = scale.notes[0];
                var tonicOctave = s.split('/')[0] + '/' + (parseInt(s.substr(-1)) + 1).toString();
                scale.notes.push(tonicOctave);
                return vexScale(scale);
            };
        }
    ]);
