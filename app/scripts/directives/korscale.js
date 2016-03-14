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
                var image = document.createElement('img');
                element[0].appendChild(image);
                scope.$watch('currentScale', function() {
                    image.src = scope.scale.genVexScale(
                        scope.currentScale.tonic, 
                        scope.currentScale.accidental.value, 
                        scope.currentScale.scaleType);
                }, true);
            }
        };
    });
