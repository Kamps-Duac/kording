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
      link: function postLink(scope, element, attrs) {
      	var canvas = element[0];
      	canvas.width = 700;
      	canvas.height = 100;
      	scope.$watch('scale.selected', function () {
      		console.log("watched");
        	scope.scale.genVexScale(canvas, scope.scale.selected.tonic, scope.scale.selected.scaleType);
      	}, true);
      }
    };
  });
