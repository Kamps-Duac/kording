'use strict';

/**
 * @ngdoc directive
 * @name kordingApp.directive:korScale
 * @description
 * # korScale
 */
angular.module('kordingApp')
    .directive('korScale', function() {
        return {restrict: 'E',

            link: function postLink(scope, element) {
                var canvas = document.createElement('canvas');
                canvas.height = 100;
                if (window.innerWidth < 650) { canvas.width = window.innerWidth; } else { canvas.width = 650; }
                element[0].appendChild(canvas);
                scope.$watch('currentScale', function() {
                    scope.scale.genVexScale(
                        canvas, 
                        scope.currentScale.tonic, 
                        scope.currentScale.accidental.value, 
                        scope.currentScale.scaleType);
                }, true);
            }
        };
    });
