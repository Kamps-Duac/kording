'use strict';

/**
 * @ngdoc directive
 * @name kordingApp.directive:korScale
 * @description
 * # korScale
 */
angular.module('kordingApp')
  .directive('korScale', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element) {
      	var canvas = element[0];
      	// set an initial size of canvas here, but this should be adjust depending on the number of notes in the scale
      	canvas.width = 700;
      	canvas.height = 100;
      	scope.$watch('scale.selected', function () {
        	scope.scale.genVexScale(canvas, scope.scale.selected.tonic, scope.scale.selected.scaleType);
      	}, true);
      }
    };
  });
