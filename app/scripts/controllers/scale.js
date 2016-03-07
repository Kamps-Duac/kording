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

        this.tonics = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        this.accidentals = [
            { 'name': 'natural', 'value': '' },
            { 'name': 'sharp', 'value': '#' },
            { 'name': 'flat', 'value': 'b' }
        ];
        this.scaleTypes = teoria.Scale.KNOWN_SCALES;
        this.defaultOctave = '4';

        this.selected = {
            'tonic': 'C',
            'accidental': '',
            'scaleType': 'major'
        };

        this.setTonic = function(tonic) {
            this.selected.tonic = tonic;
        };

        this.isTonic = function(tonic) {
            return this.selected.tonic === tonic;
        };

        this.setAccidental = function(accidental) {
            this.selected.accidental = accidental;
        };

        this.isAccidental = function(accidental) {
            return this.selected.accidental === accidental.value;
        };

        this.setScaleType = function(scaleType) {
            this.selected.scaleType = scaleType;
        };

        this.isScaleType = function(scaleType) {
            return this.selected.scaleType === scaleType;
        };
        // this.canvas = angular.element('canvas')[0];
        // vexScale(this.canvas);

        this.genVexScale = function(canvas, tonic, accidental, scaleType) {
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
            var teoriaNotes = teoria.scale(tonic + accidental + this.defaultOctave, scaleType).notes();
            for (var i = 0; i < teoriaNotes.length; i++) {
                var tn = teoriaNotes[i];
                scale.notes.push(tn.name() + tn.accidental() + '/' + tn.octave());
                if (tn.accidental()) {
                    if (!scale.accSpec.acc) { scale.accSpec.acc = tn.accidental(); }
                    scale.accSpec.num++;
                }
            }
            var s = scale.notes[0];
            var tonicOctave = s.split('/')[0] + '/' + (parseInt(s.substr(-1)) + 1).toString();
            scale.notes.push(tonicOctave);
            vexScale(canvas, scale);
        };

    }]);
