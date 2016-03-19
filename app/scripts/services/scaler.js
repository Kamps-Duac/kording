'use strict';

/**
 * @ngdoc service
 * @name kordingApp.scaler
 * @description
 * # scaler
 * Factory in the kordingApp to store the current Scale Model and expose functions
 * to manipulate the current scale.
 */
angular.module('kordingApp')
    .factory('scaler', function() {

        var TONICS = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
        var ACCIDENTALS = [
            { 'name': 'natural', 'value': '' },
            { 'name': 'sharp', 'value': '#' },
            { 'name': 'flat', 'value': 'b' }
        ];
        //var SCALE_TYPES = teoria.Scale.KNOWN_SCALES;
        var SCALE_TYPES = ['aeolian', 'blues', 'chromatic', 'dorian', 'doubleharmonic',
            'harmonicminor', 'ionian', 'locrian', 'lydian', 'majorpentatonic', 'melodicminor',
            'minorpentatonic', 'mixolydian', 'phrygian', 'wholetone', 'harmonicchromatic',
            'minor', 'major', 'flamenco'
        ];

        var selected = {
            'tonic': 'C',
            'accidental': { 'name': 'natural', 'value': '' },
            'scaleType': 'major'
        };

        function getCurrentScale() {
            return selected;
        }

        function getTonics() {
            return TONICS;
        }

        function getAccidentals() {
            return ACCIDENTALS;
        }

        function getScaleTypes() {
            return SCALE_TYPES;
        }

        function setTonic(tonic) {
            selected.tonic = tonic;
        }

        function getTonic() {
            return selected.tonic;
        }

        function setAccidental(accidental) {
            selected.accidental = accidental;
        }

        function getAccidental() {
            return selected.accidental;
        }

        function setScaleType(scaleType) {
            selected.scaleType = scaleType;
        }

        function getScaleType() {
            return selected.scaleType;
        }

        // Public API here
        return {
            getCurrentScale: getCurrentScale,
            getTonics: getTonics,
            getAccidentals: getAccidentals,
            getScaleTypes: getScaleTypes,

            getTonic: getTonic,
            setTonic: setTonic,

            getAccidental: getAccidental,
            setAccidental: setAccidental,

            getScaleType: getScaleType,
            setScaleType: setScaleType
        };
    });
